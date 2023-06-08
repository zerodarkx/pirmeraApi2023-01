const { Router } = require('express');
const { login, verificar } = require('./../controllers/login.controller');
const { tengoToken } = require('./../middlewares/auth');

const route = Router();

//verifica si existe usario y crea token
route.post('/login', login);
//verifica si el token es valido
route.post('/verificar', tengoToken, verificar);

module.exports = route;