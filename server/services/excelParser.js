const xlsx = require('xlsx');
const { parsearFechaExcel, formatearFechaISO } = require('../utils/dateUtils');
const { TIPOS_VALIDOS_VIGILANCIA } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const normalizeKey = (key) => 
  key.toUpperCase()
     .normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "")
     .trim();

const parsearVigilancia = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });
  
  if (matrix.length === 0) throw new Error('El archivo de Vigilancia está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('ID_CONTRATO') && row.includes('FECHA_INICIO')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Vigilancia (ID_CONTRATO y FECHA_INICIO)');

  const headerRow = matrix[headerRowIdx].map(cell => normalizeKey(String(cell || '')));

  const cols = {
    contrato: headerRow.indexOf('ID_CONTRATO'),
    nombre: headerRow.indexOf('NOMBRE_TRABAJADOR'),
    fechaInicio: headerRow.indexOf('FECHA_INICIO'),
    fechaFin: headerRow.indexOf('FECHA_FIN'),
    tipo: headerRow.indexOf('ID_NOVEDAD')
  };

  const novedades = {}; 
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String(row[cols.nombre] || '').trim();
    const fechaInicioRaw = row[cols.fechaInicio];
    const fechaInicio = fechaInicioRaw ? parsearFechaExcel(fechaInicioRaw) : null;
    const fechaFinRaw = row[cols.fechaFin];
    const fechaFin = fechaFinRaw ? parsearFechaExcel(fechaFinRaw) : fechaInicio;
    const tipo = String(row[cols.tipo] || '').toUpperCase().trim();

    if (contrato && fechaInicio && TIPOS_VALIDOS_VIGILANCIA.some(t => tipo.includes(t))) {
      if (!novedades[contrato]) novedades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      const actual = new Date(fechaInicio);
      const limite = fechaFin || fechaInicio;
      while (actual <= limite) {
        novedades[contrato].push({ fecha: formatearFechaISO(actual), tipo: tipo });
        actual.setDate(actual.getDate() + 1);
      }
    }
  }
  return { data: novedades, names };
};

const parsearNomina = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });

  if (matrix.length === 0) throw new Error('El archivo de Nómina está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('ID_CONTRATO') && row.includes('FECHA')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Nómina (ID_CONTRATO y FECHA)');

  const headerRow = matrix[headerRowIdx].map(cell => normalizeKey(String(cell || '')));

  const cols = {
    contrato: headerRow.indexOf('ID_CONTRATO'),
    nombre: headerRow.indexOf('NOMBRE_TRABAJADOR'),
    fecha: headerRow.indexOf('FECHA'),
    concepto: headerRow.indexOf('CONCEPTO_DV'),
    detalle: headerRow.indexOf('DETALLE_ACTIVIDAD'),
    ref: headerRow.indexOf('REFERENCIA')
  };

  const actividades = {}; 
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String(row[cols.nombre] || '').trim();
    const fechaRaw = row[cols.fecha];
    const fecha = fechaRaw ? parsearFechaExcel(fechaRaw) : null;
    const nombreConcepto = String(row[cols.concepto] || '').trim() || 'Sin Concepto';
    const descripcion = String(row[cols.detalle] || '').trim() || 'Sin Detalle';
    const referencia = String(row[cols.ref] || '').trim() || 'S/R';

    if (contrato && fecha) {
      if (!actividades[contrato]) actividades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      actividades[contrato].push({
        fecha: formatearFechaISO(fecha),
        concepto: nombreConcepto,
        detalle: descripcion,
        referencia: referencia
      });
    }
  }

  return { data: actividades, names };
};

module.exports = { parsearVigilancia, parsearNomina };
