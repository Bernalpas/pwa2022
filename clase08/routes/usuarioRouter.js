
/* 
responde a la ruta /user
*/

const { Router } = require('express');
const router = Router();
const {
    guardarUsuario,
    listarUsuario,
    buscarUno,
    actualizarUsuario,
    borrarUsuario
} = require('../controllers/usuarioControler')

router.get('/', listarUsuario);
router.get('/:id', buscarUno)
router.post('/guardar', guardarUsuario);
router.patch('/actualizar/:id', actualizarUsuario);
router.delete('/borrar/:id', borrarUsuario);


module.exports = router;