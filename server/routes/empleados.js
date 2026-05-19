const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { parsearMaestroEmpleados } = require('../services/csvParser');
const { normalizeContract } = require('../utils/stringUtils');
const Empleado = require('../models/Empleado');

const upload = multer({ dest: 'uploads/' });
const DB_PATH = path.join(__dirname, '../models/empleados.json');

// Auxiliar para migrar datos de JSON a MongoDB si la colección está vacía
const migrateIfNeeded = async () => {
  try {
    const count = await Empleado.countDocuments();
    if (count === 0 && fs.existsSync(DB_PATH)) {
      console.log('Migrando datos de JSON a MongoDB...');
      const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
      if (data.empleados && data.empleados.length > 0) {
        await Empleado.insertMany(data.empleados);
        console.log(`Migración completada: ${data.empleados.length} empleados importados.`);
      }
    }
  } catch (e) {
    console.error('Error durante la migración:', e);
  }
};

// Ejecutar migración al cargar las rutas
migrateIfNeeded();

// POST /api/empleados/cargar
router.post('/cargar', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });
    
    const { empleados, warnings } = parsearMaestroEmpleados(req.file.path);
    
    // Usamos bulkWrite para eficiencia
    const operations = empleados.map(emp => ({
      updateOne: {
        filter: { contrato: emp.contrato },
        update: { $set: emp },
        upsert: true
      }
    }));

    await Empleado.bulkWrite(operations);
    
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
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.find({});
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

// POST /api/empleados (Agregar un solo empleado)
router.post('/', async (req, res) => {
  try {
    const { nombre, contrato } = req.body;
    if (!nombre || !contrato) {
      return res.status(400).json({ error: 'El nombre y el contrato son requeridos' });
    }

    const normalizedContrato = normalizeContract(contrato);
    if (!normalizedContrato) {
      return res.status(400).json({ error: 'El contrato no tiene un formato válido' });
    }

    const exists = await Empleado.findOne({ contrato: normalizedContrato });
    if (exists) {
      return res.status(400).json({ error: 'El contrato ya existe en el sistema' });
    }

    const nuevoEmpleado = new Empleado({ 
      contrato: normalizedContrato, 
      nombre: nombre.trim(), 
      status: 'activo' 
    });

    await nuevoEmpleado.save();
    res.status(201).json({ message: 'Empleado agregado con éxito', empleado: nuevoEmpleado });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el empleado' });
  }
});

// PUT /api/empleados/:contrato (Actualizar estado o nombre)
router.put('/:contrato', async (req, res) => {
  const { contrato } = req.params;
  const { status, nombre } = req.body;
  
  try {
    const updateData = {};
    if (status) updateData.status = status;
    if (nombre) updateData.nombre = nombre;

    const emp = await Empleado.findOneAndUpdate(
      { contrato },
      { $set: updateData },
      { new: true }
    );

    if (!emp) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado actualizado', empleado: emp });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
});

// DELETE /api/empleados/:contrato
router.delete('/:contrato', async (req, res) => {
  const { contrato } = req.params;
  try {
    const result = await Empleado.deleteOne({ contrato });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
});

module.exports = router;
