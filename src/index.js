require('dotenv').config();

const express = require('express');


// const basedatos = require('./config/basedatos');

// const conexionprueba = async () => {
//     const db = await basedatos();
//     const sql = 'SELECT * FROM usuario';
//     const [row] = await db.query(sql);
//     console.log(row);
// }

// conexionprueba();

const app = express();

//configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//rutas
//llamar a las rutas
const indexRoutes = require('./routes/index.routes');
const usuarioRoutes = require('./routes/usuario.routes');
const loginRoutes = require('./routes/login.routes');

app.use('', indexRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/auth', loginRoutes);

app.listen(process.env.PORT, () => {
    console.log("servidor iniciado");
});