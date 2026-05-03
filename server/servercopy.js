require('dotenv').config();
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Configuración de CORS - PERMITIR TODOS LOS ORÍGENES
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Crear carpeta de uploads si no existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración para subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// 🚀 ENDPOINT: Cargar y Procesar Archivos
app.post('/api/cargar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
  console.log('📥 Recibiendo solicitud en /api/cargar');
  console.log('Archivos recibidos:', req.files);
  
  try {
    if (!req.files || !req.files.vigilancia || !req.files.nomina) {
      console.error('❌ Error: No se recibieron ambos archivos');
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const vigilanciaPath = req.files.vigilancia[0].path;
    const nominaPath = req.files.nomina[0].path;
    
    console.log('📄 Archivo Vigilancia:', vigilanciaPath);
    console.log('📄 Archivo Nómina:', nominaPath);

    // Leer archivos Excel
    const wbVigilancia = xlsx.readFile(vigilanciaPath);
    const wbNomina = xlsx.readFile(nominaPath);

    // Obtener datos de la primera hoja de cada archivo
    const datosVigilancia = xlsx.utils.sheet_to_json(wbVigilancia.Sheets[wbVigilancia.SheetNames[0]]);
    const datosNomina = xlsx.utils.sheet_to_json(wbNomina.Sheets[wbNomina.SheetNames[0]]);

    console.log(`Filas leídas Vigilancia: ${datosVigilancia.length}`);
    console.log(`Filas leídas Nómina: ${datosNomina.length}`);

    // Estructuras para guardar en memoria
    const trabajadores = new Map(); // Cédula -> {nombre, area}
    const novedadesMap = {};        // Cédula -> [ {fecha, tipo} ]
    const actividadMap = {};        // Cédula -> [ {fecha, concepto, valor} ]

    // Función para limpiar cédula
    const limpiarCedula = (val) => String(val).trim().replace(/\D/g, '');

    // Función para convertir fecha de Excel
    const excelSerialToDate = (excelDate) => {
      if (typeof excelDate === 'string') {
        const parsed = new Date(excelDate);
        if (!isNaN(parsed)) return parsed;
      }
      if (typeof excelDate === 'number') {
        const excelEpoch = new Date(1900, 0, 1);
        const jsDate = new Date(excelEpoch.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);
        return jsDate;
      }
      if (excelDate instanceof Date) return excelDate;
      return new Date(excelDate);
    };

    // Función para verificar si es fin de semana
    const esFinDeSemana = (date) => {
      const d = new Date(date);
      return d.getDay() === 0 || d.getDay() === 6;
    };

    // Función para obtener fechas de un rango
    const obtenerFechasRango = (inicio, fin) => {
    const fechas = [];
    
    // Función auxiliar para parsear fechas de Excel
    const parsearFecha = (fechaValor) => {
        if (!fechaValor) return null;
        
        // Si es un número (serial de Excel)
        if (typeof fechaValor === 'number') {
            const excelEpoch = new Date(1900, 0, 1);
            const jsDate = new Date(excelEpoch.getTime() + (fechaValor - 1) * 24 * 60 * 60 * 1000);
            return jsDate;
        }
        
        // Si ya es un objeto Date
        if (fechaValor instanceof Date) {
            return fechaValor;
        }
        
        // Si es string, intentar diferentes formatos
        const str = String(fechaValor).trim();
        
        // Formato: "4/1/26" o "4/1/2026"
        const matchMDY = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (matchMDY) {
            const [, mes, dia, anio] = matchMDY;
            const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
            return new Date(parseInt(anioCompleto), parseInt(mes) - 1, parseInt(dia));
        }
        
        // Formato: "1-Apr-26" o "1-Apr-2026"
        const matchDMY = str.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})$/);
        if (matchDMY) {
            const [, dia, mesStr, anio] = matchDMY;
            const meses = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
            const mes = meses[mesStr.toLowerCase()];
            const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
            return new Date(parseInt(anioCompleto), mes, parseInt(dia));
        }
        
        // Intentar parseo normal de Date como último recurso
        const date = new Date(str);
        if (!isNaN(date.getTime())) {
            return date;
        }
        
        return null;
    };
    
    const fechaInicio = parsearFecha(inicio);
    const fechaFin = parsearFecha(fin);
    
    if (!fechaInicio || !fechaFin) {
        console.error('Error al parsear fechas:', { inicio, fin });
        return fechas;
    }
    
    // Normalizar a medianoche hora local
    fechaInicio.setHours(0, 0, 0, 0);
    fechaFin.setHours(0, 0, 0, 0);
    
    let actual = new Date(fechaInicio);
    
    while (actual <= fechaFin) {
        const anio = actual.getFullYear();
        const mes = String(actual.getMonth() + 1).padStart(2, '0');
        const dia = String(actual.getDate()).padStart(2, '0');
        
        fechas.push(`${anio}-${mes}-${dia}`);
        
        actual.setDate(actual.getDate() + 1);
    }
    
    return fechas;
};

    // 1. Procesar VIGILANCIA
    console.log('\n=== PROCESANDO VIGILANCIA ===');
    datosVigilancia.forEach((fila, idx) => {
      const cedula = limpiarCedula(fila.CEDULA);
      const tipo = String(fila['MOT.'] || '').toUpperCase();
      const fechaInicio = fila['FECHA INICIO'];
      const fechaFin = fila['FECHA TERMI'] || fila['FECHA INICIO'];
      const observacion = fila.OBSERVACION || '';

      const tiposValidos = ['EMG','AT','PERM','INAS','LLUTO','LEY MARÍA','LEY MARIA'];
      const esValida = cedula && fechaInicio && tiposValidos.some(t => tipo.includes(t));

      if (esValida) {
        trabajadores.set(cedula, { nombre: fila.TRABAJADOR, area: fila['AREA TRABAJO'] });
        if (!novedadesMap[cedula]) novedadesMap[cedula] = [];

        const fechas = obtenerFechasRango(fechaInicio, fechaFin);
        console.log(`  [Fila ${idx}] Cedula: ${cedula} | Nombre: ${fila.TRABAJADOR} | Tipo: ${tipo}`);
        
        fechas.forEach(f => {
          novedadesMap[cedula].push({
            fecha: f,
            tipo: tipo.includes('LEY') ? 'LEY_MARIA' : tipo,
            observacion: observacion
          });
        });
      }
    });

    // 2. Procesar NÓMINA
    console.log('\n=== PROCESANDO NÓMINA ===');
    datosNomina.forEach((fila, idx) => {
      const cedula = limpiarCedula(fila.Contrato || fila.Cedula);
      const fecha = fila.Fecha;
      const codigo = fila['Código'] || fila.Codigo || '';
      const descripcion = fila['Concepto (Detalle)'] || fila['Concepto'] || '';
      const concepto = codigo && descripcion ? `${codigo} - ${descripcion}` : (codigo || descripcion);

      if (cedula && fecha && concepto) {
        const fechaObj = excelSerialToDate(fecha);
        const fechaISO = fechaObj.toISOString().split('T')[0];
        
        console.log(`  [Fila ${idx}] Cedula: ${cedula} | Fecha: ${fechaISO} | Concepto: ${concepto}`);
        
        trabajadores.set(cedula, { nombre: fila.Nombre, area: '' });
        if (!actividadMap[cedula]) actividadMap[cedula] = [];
        
        actividadMap[cedula].push({
          fecha: fechaISO,
          concepto: concepto,
          detalle: fila.Detalle || '',
          valor: fila.TOTAL || 0
        });
      }
    });

    // 3. CRUCE DE DATOS (BUSCAR CONFLICTOS)
    console.log('\n=== BUSCANDO CONFLICTOS ===');
    const conflictos = [];

    for (const [cedula, novedades] of Object.entries(novedadesMap)) {
      const actividades = actividadMap[cedula] || [];
      
      if (actividades.length === 0) continue;

      const fechasConActividad = new Set(actividades.map(a => a.fecha));

      novedades.forEach(nov => {
        if (fechasConActividad.has(nov.fecha)) {
          const actividadDetalle = actividades.find(a => a.fecha === nov.fecha);
          console.log(`  ✗ CONFLICTO en ${nov.fecha}: ${nov.tipo} vs ${actividadDetalle.concepto}`);
          
          conflictos.push({
            cedula,
            nombre: trabajadores.get(cedula)?.nombre || 'Desconocido',
            area: trabajadores.get(cedula)?.area || '',
            fecha: nov.fecha,
            novedad: nov.tipo,
            observacion_nov: nov.observacion,
            concepto_actividad: actividadDetalle.concepto,
            detalle_actividad: actividadDetalle.detalle
          });
        }
      });
    }

    console.log(`\n=== RESUMEN ===`);
    console.log(`Total trabajadores: ${trabajadores.size}`);
    console.log(`Total conflictos encontrados: ${conflictos.length}`);

    // Limpiar archivos temporales
    fs.unlinkSync(vigilanciaPath);
    fs.unlinkSync(nominaPath);

    res.json({
      total_trabajadores: trabajadores.size,
      total_conflictos: conflictos.length,
      conflictos
    });

  } catch (error) {
    console.error('❌ Error en el servidor:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
  console.log(`📊 Listo para recibir archivos Excel`);
  console.log(`🔗 Endpoint disponible: http://localhost:${PORT}/api/cargar`);
});