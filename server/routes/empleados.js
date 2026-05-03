const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { parsearMaestroEmpleados } = require('../services/csvParser');

const upload = multer({ dest: 'uploads/' });
const DB_PATH = path.join(__dirname, '../models/empleados.json');

// Auxiliar para leer/escribir DB JSON
const getDB = () => {
  if (!fs.existsSync(DB_PATH)) return { empleados: [] };
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
};

const saveDB = (data) => {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

// POST /api/empleados/cargar
router.post('/cargar', upload.single('file'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });
    
    const { empleados, warnings } = parsearMaestroEmpleados(req.file.path);
    saveDB({ actualizado: new Date(), empleados });
    
    fs.unlinkSync(req.file.path);
    res.json({ 
      message: 'Maestro de empleados cargado con éxito', 
      total: empleados.length,
      warnings: warnings 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/empleados
router.get('/', (req, res) => {
  const db = getDB();
  res.json(db.empleados);
});

module.exports = router;