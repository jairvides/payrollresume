const xlsx = require('xlsx');
const { parsearFechaExcel, formatearFechaISO } = require('../utils/dateUtils');
const { TIPOS_VALIDOS_VIGILANCIA } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const normalizeKey = (key) => 
  key.toUpperCase()
     .normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "")
     .trim();

const validarColumnas = (headers, requerimientos) => {
  const normHeaders = headers.map(h => normalizeKey(String(h)));
  const faltantes = [];

  requerimientos.forEach(req => {
    const encontrada = normHeaders.some(h => req.variants.some(variant => h.includes(variant)));
    if (!encontrada) faltantes.push(req.label);
  });

  if (faltantes.length > 0) {
    throw new Error(`El archivo no tiene las columnas requeridas: ${faltantes.join(', ')}`);
  }
};

const parsearVigilancia = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const datos = xlsx.utils.sheet_to_json(sheet, { raw: false });
  
  if (datos.length === 0) throw new Error('El archivo de Vigilancia está vacío');

  validarColumnas(Object.keys(datos[0]), [
    { label: 'Contrato/Cédula', variants: ['CEDULA', 'CONTRATO'] },
    { label: 'Motivo/Tipo', variants: ['MOT', 'TIPO'] },
    { label: 'Fecha Inicio', variants: ['INICIO'] }
  ]);

  const novedades = {}; 
  const names = {};

  datos.forEach(fila => {
    const keys = Object.keys(fila).map(k => ({ original: k, norm: normalizeKey(k) }));
    
    const contratoKey = keys.find(k => k.norm.includes('CEDULA') || k.norm.includes('CONTRATO'))?.original;
    const contrato = normalizeContract(contratoKey ? fila[contratoKey] : '');
    
    const nombreKey = keys.find(k => k.norm.includes('NOMBRE') || k.norm.includes('TRABAJADOR'))?.original;
    const nombre = nombreKey ? String(fila[nombreKey] || '').trim() : '';

    const motKey = keys.find(k => k.norm.includes('MOT') || k.norm.includes('TIPO'))?.original;
    const tipo = motKey ? String(fila[motKey] || '').toUpperCase() : '';
    
    const fechaInicioKey = keys.find(k => k.norm.includes('INICIO'))?.original;
    const fechaInicio = fechaInicioKey ? parsearFechaExcel(fila[fechaInicioKey]) : null;
    
    const fechaFinKey = keys.find(k => k.norm.includes('TERMI') || k.norm.includes('FIN'))?.original;
    const fechaFin = fechaFinKey ? parsearFechaExcel(fila[fechaFinKey]) : fechaInicio;

    if (contrato && fechaInicio && TIPOS_VALIDOS_VIGILANCIA.some(t => tipo.includes(t))) {
      if (!novedades[contrato]) novedades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      
      const actual = new Date(fechaInicio);
      const limite = fechaFin || fechaInicio;
      while (actual <= limite) {
        novedades[contrato].push({
          fecha: formatearFechaISO(actual),
          tipo: tipo
        });
        actual.setDate(actual.getDate() + 1);
      }
    }
  });
  return { data: novedades, names };
};

const parsearNomina = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const datos = xlsx.utils.sheet_to_json(sheet, { raw: false });

  if (datos.length === 0) throw new Error('El archivo de Nómina está vacío');

  validarColumnas(Object.keys(datos[0]), [
    { label: 'Contrato/Cédula', variants: ['CONTRATO', 'CEDULA'] },
    { label: 'Fecha', variants: ['FECHA'] },
    { label: 'Concepto/Detalle', variants: ['CONCEPTO', 'DETALLE', 'DESCRIPCION'] }
  ]);

  const actividades = {}; 
  const names = {};

  datos.forEach(fila => {
    const keys = Object.keys(fila).map(k => ({ original: k, norm: normalizeKey(k) }));

    const contratoKey = keys.find(k => k.norm.includes('CONTRATO') || k.norm.includes('CEDULA'))?.original;
    const contrato = normalizeContract(contratoKey ? fila[contratoKey] : '');
    
    const nombreKey = keys.find(k => k.norm.includes('NOMBRE'))?.original;
    const nombre = nombreKey ? String(fila[nombreKey] || '').trim() : '';
    
    const fechaKey = keys.find(k => k.norm.includes('FECHA'))?.original;
    const fecha = fechaKey ? parsearFechaExcel(fila[fechaKey]) : null;
    
    const codigoKey = keys.find(k => k.norm === 'CONCEPTO' || k.norm.includes('CODIGO'))?.original;
    const codigo = codigoKey ? String(fila[codigoKey] || '').trim() : '';
    
    const conceptoKey = keys.find(k => 
      k.norm === 'NOMBRE CONCEPTO' || 
      (k.norm.includes('CONCEPTO') && k.norm !== 'CONCEPTO') || 
      k.norm.includes('DETALLE') || 
      k.norm.includes('DESCRIPCION')
    )?.original;
    const descripcion = conceptoKey ? String(fila[conceptoKey] || '').trim() : '';
    
    const refKey = keys.find(k => k.norm.includes('REFERENCIA'))?.original;
    const referencia = refKey ? String(fila[refKey] || '').trim() : '';
    
    const centroCostoKey = keys.find(k => k.norm.includes('CENTRO') && k.norm.includes('COSTO'))?.original;
    const centroCosto = centroCostoKey ? String(fila[centroCostoKey] || '').trim() : 'S/C';
    
    const conceptoFinal = (codigo && descripcion) 
      ? `${codigo} ${descripcion}` 
      : (codigo || descripcion || 'Sin Detalle');

    if (contrato && fecha) {
      if (!actividades[contrato]) actividades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      actividades[contrato].push({
        fecha: formatearFechaISO(fecha),
        concepto: conceptoFinal,
        detalle: descripcion,
        referencia: referencia,
        centroCosto: centroCosto
      });
    }
  });
  return { data: actividades, names };
};

module.exports = { parsearVigilancia, parsearNomina };
