require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

const empleadosRoutes = require('./routes/empleados');
const auditoriaRoutes = require('./routes/auditoria');

const app = express();

// Conectar a la base de datos
connectDB();

// Permitir CORS explícitamente (acepta cualquier origen en producción; ajustar si se requiere)
app.use(cors({ origin: '*' }));
app.options('*', cors());

// Logger simple de peticiones entrantes (muestra método, ruta y origen)
app.use((req, res, next) => {
  try {
    const origin = req.headers.origin || '-';
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} Origin:${origin}`);
  } catch (e) {
    // no bloquear en caso de error
  }
  next();
});
app.use(express.json({ limit: '50mb' }));

// Asegurar carpeta uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Rutas
app.use('/api/empleados', empleadosRoutes);
app.use('/api/auditoria', auditoriaRoutes);

app.get('/api/test', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});