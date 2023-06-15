require('dotenv').config();//IMPORTA VARIABLES DE ENTORNO

const express = require('express'); //LLAMO LIBRERIA DE EXPRESS

const app = express(); //INSTACIO EXPRESS

//configuracion
app.use(express.json()); //PARA QUE EXPRESS LEA JSON DEL BODY
app.use(express.urlencoded({ extended: false })); //PARA QUE EXPRESS LEA JSON DEL BODY

//rutas
//llamar a las rutas
const usuarioRoutes = require('./routes/usuario.routes');
const loginRoutes = require('./routes/login.routes');
const tareaRoutes = require('./routes/tarea.routes');

app.use('/usuario', usuarioRoutes);
app.use('/auth', loginRoutes);
app.use('/tarea', tareaRoutes);

//CUANDO NO EXISTA RUTA ENTRA ACA
app.all('*', (req, res) => {
    res.json(
        {
            "ok": false,
            "msj": "URL no encontrada"
        }
    );
})

//INICIALIZA NUESTRA API
app.listen(process.env.PORT, () => {
    console.log("servidor iniciado");
});