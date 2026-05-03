const { FESTIVOS_COLOMBIA } = require('../config/constants');

const parsearFechaExcel = (valor) => {
  if (!valor) return null;
  if (typeof valor === 'number') {
    const excelEpoch = new Date(1900, 0, 1);
    return new Date(excelEpoch.getTime() + (valor - 1) * 24 * 60 * 60 * 1000);
  }
  if (valor instanceof Date) return valor;
  const date = new Date(valor);
  return isNaN(date) ? null : date;
};

const formatearFechaISO = (date) => {
  if (!date) return null;
  const d = date instanceof Date ? date : new Date(date);
  const anio = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${anio}-${mes}-${dia}`;
};

const esFestivo = (fecha, anio) => {
  const f = fecha instanceof Date ? fecha : new Date(fecha);
  const mes = f.getMonth() + 1;
  const dia = f.getDate();
  const festivos = FESTIVOS_COLOMBIA[anio] || [];
  return festivos.some(f => f.mes === mes && f.dia === dia);
};

const esDiaLaboral = (fecha, anio) => {
  const d = fecha instanceof Date ? fecha : new Date(fecha);
  const diaSemana = d.getDay();
  if (diaSemana === 0) return false; // Domingo
  if (diaSemana === 6) return true;  // Sábado
  return !esFestivo(d, anio);
};

const obtenerDiasLaborales = (inicio, fin, anio) => {
  const dias = [];
  
  // Parseo manual para evitar el desplazamiento de zona horaria (UTC vs Local)
  const [anioI, mesI, diaI] = inicio.split('-').map(Number);
  const [anioF, mesF, diaF] = fin.split('-').map(Number);
  
  const actual = new Date(anioI, mesI - 1, diaI);
  const finale = new Date(anioF, mesF - 1, diaF);
  
  actual.setHours(0, 0, 0, 0);
  finale.setHours(0, 0, 0, 0);
  
  while (actual <= finale) {
    if (esDiaLaboral(actual, anio)) {
      dias.push(formatearFechaISO(actual));
    }
    actual.setDate(actual.getDate() + 1);
  }
  return dias;
};

module.exports = {
  parsearFechaExcel,
  formatearFechaISO,
  esFestivo,
  esDiaLaboral,
  obtenerDiasLaborales
};