const fs = require('fs');
const { COLUMNAS_EMPLEADO } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const parsearMaestroEmpleados = (filePath) => {
  const contenido = fs.readFileSync(filePath, 'utf8');
  const lineas = contenido.split(/\r?\n/).filter(l => l.trim() !== '');
  
  if (lineas.length < 2) throw new Error('El archivo CSV está vacío o no tiene datos');

  const encabezados = lineas[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const idxContrato = encabezados.indexOf('Contrato');
  const idxNombre = encabezados.indexOf('Nombre');

  if (idxContrato === -1 || idxNombre === -1) {
    throw new Error(`El CSV debe tener las columnas: ${COLUMNAS_EMPLEADO.join(', ')}`);
  }

  const empleados = [];
  const contratosVistos = new Set();
  const warnings = [];

  for (let i = 1; i < lineas.length; i++) {
    const columnas = lineas[i].split(',').map(c => c.trim().replace(/"/g, ''));
    const contratoRaw = columnas[idxContrato];
    const nombre = columnas[idxNombre];

    if (!contratoRaw || !nombre) continue;
    
    if (contratoRaw.toLowerCase().includes('e+')) {
      warnings.push(`Línea ${i + 1}: El contrato ${contratoRaw} está en notación científica. Se recomienda exportar como Texto.`);
    }

    const contrato = normalizeContract(contratoRaw);
    if (!contrato) continue;
    if (contratosVistos.has(contrato)) continue;

    empleados.push({ contrato, nombre });
    contratosVistos.add(contrato);
  }

  return { empleados, warnings };
};

module.exports = { parsearMaestroEmpleados };