const { Router } = require('express');
const { obtenerTareas,
    agregarTarea,
    obtenerTarea,
    editarTarea,
    eliminarTarea } = require('./../controllers/tarea.controllers');
const { tengoToken } = require('./../middlewares/auth');
const { validadorTarea } = require('./../validators/tarea.validators');

const route = Router();

route.get('/', obtenerTareas,);

route.post('/', [tengoToken, validadorTarea], agregarTarea);

route.get('/:id', obtenerTarea,);

route.put('/:id', editarTarea,);

route.delete('/:id', eliminarTarea);

module.exports = route;