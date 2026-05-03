const XLSX = require('xlsx');
const fs = require('fs');

// Crear archivo de VIGILANCIA (permisos)
const vigilanciaData = [
  {
    'CEDULA': '1234567890',
    'TRABAJADOR': 'MIRANDA PALLARES LUIS MIGUEL',
    'MOT.': 'PERM',
    'AREA TRABAJO': 'OPERACIONES',
    'FECHA INICIO': new Date('2024-04-06'),
    'FECHA TERMI': new Date('2024-04-06'),
    'OBSERVACION': 'Permiso remunerado'
  }
];

const wbVigilancia = XLSX.utils.book_new();
const wsVigilancia = XLSX.utils.json_to_sheet(vigilanciaData);
XLSX.utils.book_append_sheet(wbVigilancia, wsVigilancia, 'Vigilancia');
XLSX.writeFile(wbVigilancia, 'uploads/test-vigilancia.xlsx');
console.log('✓ Created test-vigilancia.xlsx');

// Crear archivo de NÓMINA (actividades laborales)
const nominaData = [
  {
    'Contrato': '1234567890',
    'Nombre': 'MIRANDA PALLARES LUIS MIGUEL',
    'Fecha': new Date('2024-04-06'),
    'Código': '001',
    'Concepto (Detalle)': 'SALARIO BASE',
    'Detalle': 'Pago por servicios prestados',
    'TOTAL': 50000
  }
];

const wbNomina = XLSX.utils.book_new();
const wsNomina = XLSX.utils.json_to_sheet(nominaData);
XLSX.utils.book_append_sheet(wbNomina, wsNomina, 'Nómina');
XLSX.writeFile(wbNomina, 'uploads/test-nomina.xlsx');
console.log('✓ Created test-nomina.xlsx');

console.log('\n✅ Test files created successfully!');
console.log('Vigilancia file:', 'uploads/test-vigilancia.xlsx');
console.log('Nómina file:', 'uploads/test-nomina.xlsx');
