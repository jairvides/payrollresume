const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { parsearVigilancia, parsearNomina } = require('../services/excelParser');
const { obtenerDiasLaborales } = require('../utils/dateUtils');

// Función para normalizar detalles (Ej: "RIEGO POR MELGAS 130 PALMAS" -> "RIEGO POR MELGAS")
const normalizarDetalle = (detalle) => {
  if (!detalle) return 'Sin Detalle';
  return detalle
    .replace(/\s+\d+.*$/i, '') 
    .trim()
    .toUpperCase();
};

const upload = multer({ dest: 'uploads/' });
const DB_PATH = path.join(__dirname, '../models/empleados.json');

// Auxiliar para leer maestro
const getMaestro = () => {
  if (!fs.existsSync(DB_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8')).empleados || [];
  } catch (e) {
    return [];
  }
};

router.post('/analizar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), (req, res) => {
  try {
    const { fechaInicio, fechaFin, anio } = req.body;
    if (!req.files?.vigilancia || !req.files?.nomina) {
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const maestro = getMaestro();
    const vigRes = parsearVigilancia(req.files.vigilancia[0].path);
    const nomRes = parsearNomina(req.files.nomina[0].path);
    
    const novs = vigRes.data;
    const novNames = vigRes.names;
    const acts = nomRes.data;
    const actNames = nomRes.names;

    // 1. DETECCIÓN DE CONFLICTOS
    const conflictos = [];
    for (const contrato in novs) {
      const actividades = acts[contrato] || [];
      const contratoLimpio = contrato.trim();
      const empleado = maestro.find(emp => String(emp.contrato || '').trim() === contratoLimpio);
      const nombre = empleado ? empleado.nombre : (actNames[contrato] || novNames[contrato] || 'Desconocido');
      
      novs[contrato].forEach(n => {
        if (fechaInicio && fechaFin && (n.fecha < fechaInicio || n.fecha > fechaFin)) {
          return;
        }
        const act = actividades.find(a => a.fecha === n.fecha);
        if (act) {
          conflictos.push({ contrato, nombre, fecha: n.fecha, novedad: n.tipo, actividad: act.concepto });
        }
      });
    }

    // 2. DETECCIÓN DE EMPLEADOS FALTANTES
    const contratosEnArchivos = new Set([...Object.keys(novs), ...Object.keys(acts)]);
    const faltantes = maestro.filter(emp => !contratosEnArchivos.has(emp.contrato));

    // 3. DETECCIÓN DE EMPLEADOS NO REGISTRADOS
    const contratosMaestro = new Set(maestro.map(emp => emp.contrato));
    const noRegistrados = [];
    for (const contrato of contratosEnArchivos) {
      if (!contratosMaestro.has(contrato)) {
        const nombre = actNames[contrato] || novNames[contrato] || 'Nombre no encontrado en archivos';
        noRegistrados.push({ contrato, nombre });
      }
    }

    // 4. DETECCIÓN DE INACTIVIDAD
    let inactivos = [];
    if (fechaInicio && fechaFin && anio) {
      const diasLaborales = obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio));
      maestro.forEach(emp => {
        const empNovs = novs[emp.contrato] || [];
        const empActs = acts[emp.contrato] || [];
        const fechasConRegistro = new Set([...empNovs.map(n => n.fecha), ...empActs.map(a => a.fecha)]);
        const diasSinRegistro = diasLaborales.filter(dia => !fechasConRegistro.has(dia));
        if (diasSinRegistro.length > 0) {
          inactivos.push({ contrato: emp.contrato, nombre: emp.nombre, dias_faltantes: diasSinRegistro });
        }
      });
    }

    // 5. DETECCIÓN DE MÚLTIPLES ACTIVIDADES (> 2 el mismo día)
    const multiples = [];
    for (const contrato in acts) {
      const actividades = acts[contrato];
      const contratoLimpio = contrato.trim();
      const empleado = maestro.find(emp => String(emp.contrato || '').trim() === contratoLimpio);
      const nombre = empleado ? empleado.nombre : (actNames[contrato] || 'Desconocido');

      const conteoPorFecha = {};
      actividades.forEach(act => {
        if (!conteoPorFecha[act.fecha]) conteoPorFecha[act.fecha] = [];
        conteoPorFecha[act.fecha].push(act.concepto);
      });

      for (const fecha in conteoPorFecha) {
        if (conteoPorFecha[fecha].length > 2) {
          multiples.push({
            contrato,
            nombre,
            fecha,
            actividades: conteoPorFecha[fecha]
          });
        }
      }
    }

    // 6. RESUMEN DE DETALLES Y REFERENCIAS
    const resumenDetallesMap = {}; 
    for (const contrato in acts) {
      const actividades = acts[contrato];
      actividades.forEach(act => {
        const detNorm = normalizarDetalle(act.detalle);
        const ref = act.referencia || 'S/R';
        if (!resumenDetallesMap[detNorm]) resumenDetallesMap[detNorm] = new Set();
        resumenDetallesMap[detNorm].add(ref);
      });
    }

    const resumenDetalles = Object.entries(resumenDetallesMap).map(([detalle, refs]) => ({
      detalle,
      referencias: Array.from(refs).sort().join(', ')
    }));

    res.json({
      resumen: {
        total_conflictos: conflictos.length,
        total_faltantes: faltantes.length,
        total_inactivos: inactivos.length,
        total_no_registrados: noRegistrados.length,
        total_multiples: multiples.length
      },
      conflictos,
      faltantes,
      inactivos,
      noRegistrados,
      multiples,
      resumenDetalles
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;