
/*
Responde a /api/productos
*/

const { Router } = require('express');
const router = Router();
const { 
    formularioProducto,
    selectProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productosController')


router.get('/', formularioProducto); 
router.get('/all', selectProducto);
router.post('/', crearProducto);
router.put('/update/:id', actualizarProducto)
router.delete('/eliminar/:id', eliminarProducto)

module.exports = router;



