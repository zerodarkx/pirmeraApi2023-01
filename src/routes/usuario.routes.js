const { Router } = require('express');

const { agregarUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerTodo,
    obtenerUnoSolo,
    obtenerTodosUsuario,
    eliminarUsuarioHtml, 
    agregarUsuarioHtml,
    editarUsuarioHtml,
    obtenerUnoSoloHtml} = require('./../controllers/usuario.controller');
const { tengoToken } = require('./../middlewares/auth');
const { validadorUsuario } = require('./../validators/usuario.validators');

const router = Router();

/**
 * Rutas que mostraran mi html
 */
router.get('', async (req, res) => {
    const data = await obtenerTodosUsuario();
    res.render('usuario/listar', { data });
});

//vista de agregar usuario
router.get('/agregar', (req, res) => {
    res.render('usuario/agregar');
});
//accion para agregar usuario
router.post('/agregarUsuario', async (req, res) => {
    await agregarUsuarioHtml(req);
    res.redirect('/usuario')
})

//vista para editar usuario
router.get('/editar/:id', async(req, res) => {
    const data = await obtenerUnoSoloHtml(req);
    console.log(data[0]);
    res.render('usuario/editar', {data: data[0]});
});

router.post('/editarUsuario/:id', async (req, res) => {
    const data = await editarUsuarioHtml(req);
    res.redirect('/usuario');
});

//accion para poder editarlo

//accion de eliminar
router.get('/eliminar/:id', async (req, res) => {
    const resultado = await eliminarUsuarioHtml(req);
    res.redirect('/usuario')
});

/**
 * Rutas que solicito a mi api
 */
router.get('/listar', tengoToken, obtenerTodo);
router.get('/:id', tengoToken, obtenerUnoSolo);
router.post('/agregar', [validadorUsuario], agregarUsuario);
router.put('/editar/:id', tengoToken, editarUsuario);
router.delete('/eliminar/:id', tengoToken, eliminarUsuario);

module.exports = router;