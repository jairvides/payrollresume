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
const Empleado = require('../models/Empleado');
const { optimizarYSanitizarNomina, reconstruirLayoutPlano } = require('../utils/dataSanitizer');
const upload = multer({ dest: 'uploads/' });

router.post('/analizar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
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
    const actNames = nomRes.names;
    const acts = optimizarYSanitizarNomina(nomRes.data);
    const nominaCorregida = reconstruirLayoutPlano(acts, actNames);

    const diasLaborales = (fechaInicio && fechaFin && anio)
      ? obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio))
      : [];

    const contratosMaestro = new Set(maestro.map(emp => emp.contrato));
    const todosEmpleados = [];
    maestro.forEach(emp => todosEmpleados.push({ contrato: emp.contrato, nombre: emp.nombre }));

    for (const contrato in acts) {
      if (!contratosMaestro.has(contrato)) {
        todosEmpleados.push({ contrato, nombre: actNames[contrato] || 'Desconocido' });
      }
    }

    const matriz = calcularMatrizLaboral(todosEmpleados, diasLaborales, acts, novs, parseInt(anio), fechaInicio, fechaFin);
    const reporteTractoristas = procesarReporteTractoristas(acts, actNames);

    // ... (Mantén aquí tu lógica de conflictos, inactivos, multiples, etc.)
    const fechasConDatosSet = new Set(diasLaborales);
    matriz.forEach(emp => {
      Object.keys(emp.conteo).forEach(fecha => fechasConDatosSet.add(fecha));
    });

    const diasLaboralesExtendidos = Array.from(fechasConDatosSet).sort((a, b) => new Date(a) - new Date(b));

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
      reporteTractoristas,
      nominaCorregida,
      diasLaborales
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    archivosABorrar.forEach(ruta => fs.unlink(ruta, () => {}));
  }
});

router.post('/exportar', (req, res) => {
  try {
    const { result } = req.body;
    const wb = xlsx.utils.book_new();
    
    if (result.reporteTractoristas) {
      const wsTractoristas = xlsx.utils.json_to_sheet(result.reporteTractoristas);
      xlsx.utils.book_append_sheet(wb, wsTractoristas, 'TRACTORISTAS');
    }

    const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.send(buf);
  } catch (error) {
    res.status(500).json({ error: 'Error al exportar' });
  }
});

module.exports = router;