const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { parsearMaestroEmpleados } = require('../services/csvParser');
const { normalizeContract } = require('../utils/stringUtils');

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

// POST /api/empleados (Agregar un solo empleado)
router.post('/', (req, res) => {
  try {
    const { nombre, contrato } = req.body;
    if (!nombre || !contrato) {
      return res.status(400).json({ error: 'El nombre y el contrato son requeridos' });
    }

    const normalizedContrato = normalizeContract(contrato);
    if (!normalizedContrato) {
      return res.status(400).json({ error: 'El contrato no tiene un formato válido' });
    }

    const db = getDB();
    if (db.empleados.some(e => e.contrato === normalizedContrato)) {
      return res.status(400).json({ error: 'El contrato ya existe en el sistema' });
    }

    const nuevoEmpleado = { 
      contrato: normalizedContrato, 
      nombre: nombre.trim(), 
      status: 'activo' 
    };

    db.empleados.push(nuevoEmpleado);
    saveDB(db);

    res.status(201).json({ message: 'Empleado agregado con éxito', empleado: nuevoEmpleado });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el empleado' });
  }
});

// PUT /api/empleados/:contrato (Actualizar estado o nombre)
router.put('/:contrato', (req, res) => {
  const { contrato } = req.params;
  const { status, nombre } = req.body;
  const db = getDB();
  const emp = db.empleados.find(e => e.contrato === contrato);
  if (!emp) return res.status(404).json({ error: 'Empleado no encontrado' });

  if (status) emp.status = status;
  if (nombre) emp.nombre = nombre;
  
  saveDB(db);
  res.json({ message: 'Empleado actualizado', empleado: emp });
});

// DELETE /api/empleados/:contrato
router.delete('/:contrato', (req, res) => {
  const { contrato } = req.params;
  let db = getDB();
  db.empleados = db.empleados.filter(e => e.contrato !== contrato);
  saveDB(db);
  res.json({ message: 'Empleado eliminado' });
});

module.exports = router;