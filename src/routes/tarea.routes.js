const { Router } = require('express');
const { obtenerTareas,
    agregarTarea,
    obtenerTarea,
    editarTarea,
    eliminarTarea } = require('./../controllers/tarea.controllers');

const route = Router();

route.get('/', obtenerTareas,);

route.post('/', agregarTarea,);

route.get('/:id', obtenerTarea,);

route.put('/:id', editarTarea,);

route.delete('/:id', eliminarTarea);

module.exports = route;