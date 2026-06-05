const xlsx = require('xlsx');
const { parsearFechaExcel, formatearFechaISO } = require('../utils/dateUtils');
const { TIPOS_VALIDOS_VIGILANCIA } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const normalizeKey = (key) =>
  String(key || '')
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]/g, '')
    .trim();

const buildHeaderMap = (headerRow) =>
  headerRow.reduce((acc, cell, index) => {
    const key = normalizeKey(cell);
    if (key) acc[key] = index;
    return acc;
  }, {});

const parsearVigilancia = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });

  if (matrix.length === 0) throw new Error('El archivo de Vigilancia está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('IDCONTRATO') && row.includes('FECHAINICIO')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Vigilancia (ID_CONTRATO y FECHA_INICIO)');

  const headerRow = matrix[headerRowIdx];
  const headerMap = buildHeaderMap(headerRow);

  const cols = {
    contrato: headerMap.IDCONTRATO,
    nombre: headerMap.NOMBRETRABAJADOR,
    fechaInicio: headerMap.FECHAINICIO,
    fechaFin: headerMap.FECHAFIN,
    tipo: headerMap.IDNOVEDAD
  };

  const novedades = {};
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato] ?? row[headerMap.IDCONTRATO];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String((row[cols.nombre] ?? row[headerMap.NOMBRETRABAJADOR]) || '').trim();
    const fechaInicioRaw = row[cols.fechaInicio] ?? row[headerMap.FECHAINICIO];
    const fechaInicio = fechaInicioRaw ? parsearFechaExcel(fechaInicioRaw) : null;
    const fechaFinRaw = row[cols.fechaFin] ?? row[headerMap.FECHAFIN];
    const fechaFin = fechaFinRaw ? parsearFechaExcel(fechaFinRaw) : fechaInicio;
    const tipo = String((row[cols.tipo] ?? row[headerMap.IDNOVEDAD]) || '').toUpperCase().trim();

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
    if (row.includes('IDCONTRATO') && row.includes('FECHA')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Nómina (ID_CONTRATO y FECHA)');

  const headerRow = matrix[headerRowIdx];
  const headerMap = buildHeaderMap(headerRow);

  const cols = {
    contrato: headerMap.IDCONTRATO,
    nombre: headerMap.NOMBRETRABAJADOR,
    fecha: headerMap.FECHA,
    concepto: headerMap.CONCEPTODV !== undefined ? headerMap.CONCEPTODV : headerMap.CONCEPTO,
    detalle: headerMap.DETALLEACTIVIDAD !== undefined ? headerMap.DETALLEACTIVIDAD : headerMap.DETALLE,
    ref: headerMap.REFERENCIA,
    digitoVerificacion: headerMap.DIGITOVERIFICACION
  };

  const actividades = {};
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato] ?? row[headerMap.IDCONTRATO];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String((row[cols.nombre] ?? row[headerMap.NOMBRETRABAJADOR]) || '').trim();
    const fechaRaw = row[cols.fecha] ?? row[headerMap.FECHA];
    const fecha = fechaRaw ? parsearFechaExcel(fechaRaw) : null;
    
    const nombreConcepto = String(
      [
        row[cols.concepto],
        row[headerMap.CONCEPTODV],
        row[cols.digitoVerificacion],
        row[headerMap.DIGITOVERIFICACION],
        row[headerMap.DIGITOVERIFICADOR]
      ].find(valor => String(valor || '').trim()) || ''
    ).trim() || 'Sin Concepto';
    
    const descripcion = String((row[cols.detalle] ?? row[headerMap.DETALLEACTIVIDAD]) || '').trim() || 'Sin Detalle';
    const referencia = String((row[cols.ref] ?? row[headerMap.REFERENCIA]) || '').trim() || 'S/R';
    
    // Aquí capturamos la columna del dígito de verificación
    const digitoVerificacion = cols.digitoVerificacion !== undefined 
      ? String(row[cols.digitoVerificacion] || '').trim() 
      : '';

    if (contrato && fecha) {
      if (!actividades[contrato]) actividades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      actividades[contrato].push({
        fecha: formatearFechaISO(fecha),
        concepto: nombreConcepto,
        detalle: descripcion,
        referencia: referencia,
        digitoVerificacion: digitoVerificacion // Y lo guardamos en la memoria
      });
    }
  }

  return { data: actividades, names };
};

module.exports = { parsearVigilancia, parsearNomina };