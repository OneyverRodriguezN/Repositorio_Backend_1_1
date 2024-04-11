const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController')

// Rutas de CRUD Proveedores
router.post('/',proveedorController.agregarProveedor);
router.get('/',proveedorController.buscarProveedors);
router.get('/:id',proveedorController.buscarProveedor);
router.delete('/:id',proveedorController.eliminarProveedor);
router.put('/:id',proveedorController.actualizarProveedor);

module.exports = router;
git init