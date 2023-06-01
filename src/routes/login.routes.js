const { Router } = require('express');
const { login, verificar } = require('./../controllers/login.controller');

const route = Router();

//verifica si existe usario y crea token
route.post('/login', login);
//verifica si el token es valido
route.post('/verificar', verificar);

module.exports = route;