// Rutas para el modelo user
const { Router } = require('express');
const { usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete } = require('../controllers/usuarios');

const router = Router();

// Definimos las rutas con Router y el Controlador controllers/usuarios.js, las funciones no se ejecutan, se está mandando en el callback la referencia a la función
router.get('/', usuariosGet );

router.post('/', usuariosPost );

router.put('/:id?', usuariosPut );

router.patch('/:id', usuariosPatch );

router.delete('/:id', usuariosDelete );










module.exports = router;