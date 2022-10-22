

const { Router } = require('express');
const router = Router();
const { 
    bienvenidaProductos,
    listadoProductos,
    guardarProductos
} = require('../controllers/productosController')


router.get('/', bienvenidaProductos);

router.get('/nosotros', listadoProductos);

router.post('/guardar', guardarProductos)

module.exports = router;




