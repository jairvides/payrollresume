const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const { parsearVigilancia, parsearNomina } = require('../services/excelParser');
const { obtenerDiasLaborales } = require('../utils/dateUtils');
const { calcularMatrizLaboral, generarCSVMatriz } = require('../services/matrixService');
const { procesarReporteTractoristas } = require('../services/tractoristaService');
const { procesarReporteBonificacion } = require('../services/bonificacionService');
const Empleado = require('../models/Empleado');
// Asegúrate de que esta línea esté así:
const { optimizarYSanitizarNomina, reconstruirLayoutPlano } = require('../utils/dataSanitizer'); // Importar la función de sanitización de datos

const upload = multer({ dest: 'uploads/' });

router.post('/analizar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
  // Guardamos las rutas de los archivos para poder borrarlos al final
  const archivosABorrar = [];
  if (req.files?.vigilancia?.[0]) archivosABorrar.push(req.files.vigilancia[0].path);
  if (req.files?.nomina?.[0]) archivosABorrar.push(req.files.nomina[0].path);

  try {
    const { fechaInicio, fechaFin, anio } = req.body;
    if (!req.files?.vigilancia || !req.files?.nomina) {
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const maestro = await Empleado.find({ status: 'activo' });
    const vigRes = parsearVigilancia(req.files.vigilancia[0].path);
    const nomRes = parsearNomina(req.files.nomina[0].path);

    const novs = vigRes.data;
    const novNames = vigRes.names;


    // --- AQUÍ APLICAMOS LA MAGIA ---
    // Sanitizamos los datos en memoria antes de que sigan su camino en el algoritmo
    const actNames = nomRes.names;

    // LLLAMADA AL MÓDULO MODULAR DE SANITIZACIÓN
    const acts = optimizarYSanitizarNomina(nomRes.data);

    // Generamos la nómina corregida plana para que viaje directo al Frontend y esté lista para exportar
    const nominaCorregida = reconstruirLayoutPlano(acts, actNames);


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

    const contratosEnArchivos = new Set([...Object.keys(novs), ...Object.keys(acts)]);
    const faltantes = maestro.filter(emp => !contratosEnArchivos.has(emp.contrato));

    const contratosMaestro = new Set(maestro.map(emp => emp.contrato));
    const noRegistrados = [];
    for (const contrato of contratosEnArchivos) {
      if (!contratosMaestro.has(contrato)) {
        const nombre = actNames[contrato] || novNames[contrato] || 'Nombre no encontrado en archivos';
        noRegistrados.push({ contrato, nombre });
      }
    }

    let inactivos = [];
    if (fechaInicio && fechaFin && anio) {
      const diasLaborales = obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio));

      maestro.forEach(emp => {
        const empNovs = novs[emp.contrato] || [];
        const empActs = acts[emp.contrato] || [];

        // --- AQUÍ APLICAMOS EL FILTRO ---
        // Verificamos si tiene el código DV01 en alguna de sus actividades
        const esAdministrativo = empActs.some(act =>
          String(act.digitoVerificacion || '').trim().toUpperCase() === 'DV01'
        );

        // Si es administrativo (DV01), lo saltamos
        if (esAdministrativo) return;

        // Si no es administrativo, procedemos con la lógica de inactivos
        const fechasConRegistro = new Set([...empNovs.map(n => n.fecha), ...empActs.map(a => a.fecha)]);
        const diasSinRegistro = diasLaborales.filter(dia => !fechasConRegistro.has(dia));

        if (diasSinRegistro.length > 0) {
          inactivos.push({ contrato: emp.contrato, nombre: emp.nombre, dias_faltantes: diasSinRegistro });
        }
      });
    }

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
        if (conteoPorFecha[fecha].length >= 2) {
          multiples.push({
            contrato,
            nombre,
            fecha,
            actividades: conteoPorFecha[fecha]
          });
        }
      }
    }
    // EL SORT DEBE IR AQUÍ, FUERA DEL BUCLE
    multiples.sort((a, b) => a.nombre.localeCompare(b.nombre));

    const resumenDetallesMap = {};

    // 1. Recorremos todas las actividades
    for (const contrato in acts) {
      acts[contrato].forEach(act => {
        const concepto = act.concepto || 'Sin Concepto';
        const detalle = act.detalle || '';
        const ref = String(act.referencia || 'S/R').trim().toUpperCase();

        // Creamos una clave única basada en concepto y detalle
        const key = `${concepto}:::${detalle}`;

        if (!resumenDetallesMap[key]) {
          resumenDetallesMap[key] = { concepto, detalle, refs: new Set() };
        }
        resumenDetallesMap[key].refs.add(ref);
      });
    }

    // 2. Ahora, el paso clave: fusionar los que comparten misma referencia
    // Transformamos el mapa a un array plano
    let listaIntermedia = Object.values(resumenDetallesMap);

    // Agrupamos por concepto y referencia para concatenar detalles
    const finalMap = {};

    listaIntermedia.forEach(item => {
      // Intentamos identificar grupos por concepto + referencia (si solo hay una ref)
      const refKey = Array.from(item.refs).length === 1 ? Array.from(item.refs)[0] : null;
      const groupKey = refKey ? `${item.concepto}:::${refKey}` : `${item.concepto}:::${item.detalle}`;

      if (!finalMap[groupKey]) {
        finalMap[groupKey] = {
          concepto: item.concepto,
          detalles: new Set(),
          refs: new Set()
        };
      }
      finalMap[groupKey].detalles.add(item.detalle);
      item.refs.forEach(r => finalMap[groupKey].refs.add(r));
    });

    // 3. Resultado final para el frontend
    const resumenDetalles = Object.values(finalMap)
      .sort((a, b) => a.concepto.localeCompare(b.concepto))
      .map(item => ({
        concepto: item.concepto,
        detalle: Array.from(item.detalles).sort().join(' - '),
        referencias: Array.from(item.refs).sort().join(', ')
      }));

    const diasLaborales = (fechaInicio && fechaFin && anio)
      ? obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio))
      : [];

    const todosEmpleados = [];
    maestro.forEach(emp => todosEmpleados.push({ contrato: emp.contrato, nombre: emp.nombre }));

    for (const contrato in acts) {
      if (!contratosMaestro.has(contrato)) {
        todosEmpleados.push({ contrato, nombre: actNames[contrato] || novNames[contrato] || 'Desconocido' });
      }
    }
    for (const contrato in novs) {
      if (!contratosMaestro.has(contrato) && !acts[contrato]) {
        todosEmpleados.push({ contrato, nombre: novNames[contrato] || 'Desconocido' });
      }
    }

    const matriz = calcularMatrizLaboral(todosEmpleados, diasLaborales, acts, novs, parseInt(anio), fechaInicio, fechaFin);

    const fechasConDatosSet = new Set(diasLaborales);
    matriz.forEach(emp => {
      Object.keys(emp.conteo).forEach(fecha => fechasConDatosSet.add(fecha));
    });

    const diasLaboralesExtendidos = Array.from(fechasConDatosSet).sort((a, b) => new Date(a) - new Date(b));

    const reporteTractoristas = procesarReporteTractoristas(acts, actNames);

    // const { fechaInicio, fechaFin } = req.body;

    // Gestionamos los empleados
    const empleadosConfig = [
    { id: '11281082232', nombre: 'Luis Oyola' }, 
    { id: '11281090663', nombre: 'Carlos Perez' }
];

    // Y luego la los llamamos servicio:
    const reporteBonificacion = procesarReporteBonificacion(
      acts,
      empleadosConfig, // Pasas el objeto completo
      fechaInicio,
      fechaFin
    );

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
      resumenDetalles,
      matriz,
      nominaCorregida, // Agrega nominaCorregida al payload de salida
      reporteTractoristas, // Pestaña Tractoristas
      reporteBonificacion, // Se agrega pestaña Bonificación Fertilizante
      empleadosConfig, // Se agrega para hacer dinámico el thead de la pestaña Bonificacion
      diasLaborales: diasLaboralesExtendidos
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    // --- AQUÍ HACEMOS LA LIMPIEZA INMEDIATA ---
    archivosABorrar.forEach(rutaArchivo => {
      fs.unlink(rutaArchivo, (err) => {
        if (err) {
          console.error(`No se pudo eliminar el archivo temporal: ${rutaArchivo}`, err);
        } else {
          console.log(`🗑️ Archivo temporal eliminado con éxito: ${rutaArchivo}`);
        }
      });
    });
  }
});

router.post('/exportar-nomina-corregida', (req, res) => {
  try {
    const { result } = req.body;

    if (!result || !result.nominaCorregida) {
      return res.status(400).json({ error: 'No se encontraron datos de nómina corregida para exportar' });
    }

    // El array plano ya viene procesado desde el análisis inicial
    const filasAExportar = result.nominaCorregida;

    const wb = xlsx.utils.book_new();

    const ws = xlsx.utils.json_to_sheet(filasAExportar);
    // Ya no necesitas { header: ... } porque el orden ya lo definiste al crear los objetos
    xlsx.utils.book_append_sheet(wb, ws, 'Nómina Corregida 3JM');

    const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });

    res.setHeader('Content-Disposition', 'attachment; filename="nomina_corregida_limpia.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.status(200).send(buf);
  } catch (error) {
    console.error('Error al exportar nómina:', error);
    res.status(500).json({ error: 'Error interno al generar el archivo Excel de nómina' });
  }
});

router.post('/exportar-matriz', (req, res) => {
  try {
    const { result } = req.body;
    if (!result || !result.matriz || !result.diasLaborales) {
      return res.status(400).json({ error: 'Datos insuficientes para exportar la matriz' });
    }

    const csvContent = generarCSVMatriz(result.matriz, result.diasLaborales);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="matriz_laboral.csv"');
    res.status(200).send(csvContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el CSV de la matriz' });
  }
});

router.post('/exportar', (req, res) => {
  try {
    const { result } = req.body;

    if (!result) return res.status(400).json({ error: 'No se proporcionaron datos para exportar' });

    const wb = xlsx.utils.book_new();

    const sheets = [
      { name: 'Conflictos', data: result.conflictos },
      { name: 'Faltantes', data: result.faltantes },
      { name: 'Inactivos', data: result.inactivos.map(i => ({ ...i, dias_faltantes: i.dias_faltantes.join(', ') })) },
      { name: 'No Registrados', data: result.noRegistrados },
      // AQUÍ USAMOS \n PARA QUE EXCEL SALTE DE LÍNEA
      {
        name: 'Multiples Actividades', data: result.multiples.map(m => ({
          ...m,
          actividades: m.actividades.join('\n')
        }))
      },
      { name: 'Resumen Detalles', data: result.resumenDetalles },
    ];
    // ... resto de la lógica de exportación igual

    sheets.forEach(sheet => {
      const ws = xlsx.utils.json_to_sheet(sheet.data);
      xlsx.utils.book_append_sheet(wb, ws, sheet.name);
    });

    if (result.reporteTractoristas) {
      const wsTractoristas = xlsx.utils.json_to_sheet(result.reporteTractoristas);
      xlsx.utils.book_append_sheet(wb, wsTractoristas, 'TRACTORISTAS');
    }

    if (result.reporteBonificacion) {
      const wsBonificacion = xlsx.utils.json_to_sheet(result.reporteBonificacion);
      xlsx.utils.book_append_sheet(wb, wsBonificacion, 'BONIFICACION');
    }

    const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Disposition', 'attachment; filename="auditoria.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el archivo Excel' });
  }
});

module.exports = router;