const { Router } = require('express');

const { agregarUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerTodo,
    obtenerUnoSolo } = require('./../controllers/usuario.controller');
const { tengoToken } = require('./../middlewares/auth');

const router = Router();

router.get('/', tengoToken, obtenerTodo);

router.get('/:id', tengoToken, obtenerUnoSolo);

router.post('/', tengoToken, agregarUsuario);

router.put('/:id', tengoToken, editarUsuario);

router.delete('/:id', tengoToken, eliminarUsuario);

module.exports = router;