const xlsx = require('xlsx');
const { obtenerDiasLaborales } = require('../utils/dateUtils');

const normalizarTexto = (text) => {
  if (!text) return '';
  return text.toUpperCase()
             .normalize("NFD")
             .replace(/[\u0300-\u036f]/g, "")
             .trim();
};

const generarDiasCalendarioTodos = (fechaInicioStr, fechaFinStr) => {
  const listaDias = [];
  const [anioI, mesI, diaI] = fechaInicioStr.split('-').map(Number);
  const [anioF, mesF, diaF] = fechaFinStr.split('-').map(Number);
  
  const inicio = new Date(anioI, mesI - 1, diaI);
  const fin = new Date(anioF, mesF - 1, diaF);
  
  let actual = new Date(inicio);
  while (actual <= fin) {
    const yyyy = actual.getFullYear();
    const mm = String(actual.getMonth() + 1).padStart(2, '0');
    const dd = String(actual.getDate()).padStart(2, '0');
    listaDias.push(`${yyyy}-${mm}-${dd}`);
    actual.setDate(actual.getDate() + 1);
  }
  return listaDias;
};

const calcularMatrizLaboral = (todosEmpleados, diasLaborales, acts, novs, anio = null, fechaInicio = null, fechaFin = null) => {
  const matriz = [];

  const diasCalendarioCompleto = (fechaInicio && fechaFin) 
    ? generarDiasCalendarioTodos(fechaInicio, fechaFin)
    : diasLaborales;

  todosEmpleados.forEach(emp => {
    const empActs = acts[emp.contrato] || [];
    const empNovs = novs[emp.contrato] || [];
    const conteoDias = {};

    // Buscamos si existe 'DV01' en el campo guardado (DIGITO_VERIFICACION) o SUELDO BASICO
    const isAdmin = empActs.some(act => {
      const digitoNorm = String(act.digitoVerificacion || '').trim().toUpperCase();
      if (digitoNorm === 'DV01') return true;

      const conceptoNorm = normalizarTexto(act.concepto);
      return conceptoNorm.includes('SUELDO BASICO') || conceptoNorm.includes('SALARIO BASE');
    });

    const diasAIterar = isAdmin ? diasCalendarioCompleto : diasLaborales;

    diasAIterar.forEach(dia => {
      const actividadesDia = empActs.filter(a => a.fecha === dia);
      const actCount = actividadesDia.length;

      const novedadesDia = empNovs.filter(n => n.fecha === dia);
      const tiposNovedades = [...new Set(novedadesDia.map(n => n.tipo))].join(', ');

      const [anioDia, mesDia, diaMes] = dia.split('-').map(Number);
      const ultimoDiaMes = new Date(anioDia, mesDia, 0).getDate();
      const esUltimoDiaQuincena = diaMes === 15 || diaMes === ultimoDiaMes;

      let cellValue = '';

      if (isAdmin) {
        const parts = [];
        
        if (esUltimoDiaQuincena && anio) {
          if (diaMes === 15) {
            parts.push(15);
          } else {
            const diasTotales = diaMes - 15;
            const esDiaLaboralFinal = obtenerDiasLaborales(dia, dia, parseInt(anio)).length > 0;
            parts.push(esDiaLaboralFinal ? diasTotales : diasTotales - 1);
          }
        }

        parts.push('ADM');
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      } else {
        const parts = [];
        if (actCount > 0) parts.push(actCount);
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      }
      
      if (cellValue !== '') {
        conteoDias[dia] = cellValue;
      }
    });

    matriz.push({
      contrato: emp.contrato,
      nombre: emp.nombre,
      conteo: conteoDias
    });
  });

  return matriz;
};

const generarCSVMatriz = (matriz, diasLaborales) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const formattedDays = diasLaborales.map(date => {
    const [y, m, d] = date.split('-');
    return `${d} ${months[parseInt(m) - 1]}`;
  });

  const header = ['Nombre', ...formattedDays].join(',');
  const rows = matriz.map(emp => {
    const rowValues = diasLaborales.map(date => {
      const val = emp.conteo[date] || '';
      return String(val).includes(',') ? `"${val}"` : val;
    });
    return [`"${emp.nombre}"`, ...rowValues].join(',');
  });

  return [header, ...rows].join('\n');
};

module.exports = { calcularMatrizLaboral, generarCSVMatriz };