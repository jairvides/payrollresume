const xlsx = require('xlsx');

/**
 * Calcula la matriz laboral aplicando reglas diferenciadas para administrativos y operativos.
 * @param {Array} todosEmpleados - Lista de empleados (Maestro + No Registrados)
 * @param {Array} diasLaborales - Lista de fechas en formato ISO (YYYY-MM-DD)
 * @param {Object} acts - Actividades por contrato { contrato: [ {fecha, concepto...}, ... ] }
 * @param {Object} novs - Novedades por contrato { contrato: [ {fecha, tipo...}, ... ] }
 */
const calcularMatrizLaboral = (todosEmpleados, diasLaborales, acts, novs) => {
  const matriz = [];

  todosEmpleados.forEach(emp => {
    const empActs = acts[emp.contrato] || [];
    const empNovs = novs[emp.contrato] || [];
    const conteoDias = {};

    // Identificar si es administrativo: Buscamos el código "DV01" en el Concepto de sus actividades
    const isAdmin = empActs.some(act => act.concepto && act.concepto.toUpperCase().includes('DV01'));

    diasLaborales.forEach(dia => {
      const actividadesDia = empActs.filter(a => a.fecha === dia);
      const actCount = actividadesDia.length;

      const novedadesDia = empNovs.filter(n => n.fecha === dia);
      const tiposNovedades = [...new Set(novedadesDia.map(n => n.tipo))].join(', ');

      let cellValue = '';

      if (isAdmin) {
        // Lógica Administrativos: Siempre debe incluir 'ADM'
        const parts = [];
        if (actCount > 0) parts.push(actCount);
        parts.push('ADM');
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      } else {
        // Lógica Operativos
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

/**
 * Genera el contenido CSV de la matriz laboral.
 */
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


