const { Router } = require('express'); // REQUERIMOS EL MODULO DE RUTAS DE EXPRESS
//LLAMAMOS A NUESTROS CONTROLADORES
const { login, verificar } = require('./../controllers/login.controller'); 
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN VALIDO0
const { tengoToken } = require('./../middlewares/auth');

//INSTACIA DE NUESTRA ROUTER DE EXPRESS
const route = Router();

//verifica si existe usario y crea token
route.post('/login', login);
//verifica si el token es valido
route.post('/verificar', tengoToken, verificar);

//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = route;