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

app.use('', indexRoutes);
app.use('/usuario', usuarioRoutes);

app.listen(4000, () => {
    console.log("servidor iniciado");
});