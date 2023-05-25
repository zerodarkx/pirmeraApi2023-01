const express = require('express');

const app = express();

//configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//rutas
//llamar a las rutas
const indexRoutes = require('./routes/index.routes');
const usuarioRoutes = require('./routes/usuario.routes');

app.use('', indexRoutes);
app.use('/usuario', usuarioRoutes);

app.listen(4000, () => {
    console.log("servidor iniciado");
});