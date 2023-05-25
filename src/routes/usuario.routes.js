const { Router } = require('express');

const { agregarUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerTodo, 
    obtenerUnoSolo } = require('./../controllers/usuario.controller');

const router = Router();

router.get('/', obtenerTodo);

router.get('/:id', obtenerUnoSolo);

router.post('/', agregarUsuario);

router.put('/:id', editarUsuario);

router.delete('/:id', eliminarUsuario);

module.exports = router;