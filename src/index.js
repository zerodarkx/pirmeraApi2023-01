require('dotenv').config();//IMPORTA VARIABLES DE ENTORNO

const express = require('express'); //LLAMO LIBRERIA DE EXPRESS
const exphbs = require('express-handlebars'); // importo libreria de handlbara psra nuestras vistas
const path = require('path'); //unir rutas sin importar el S.O.

const app = express(); //INSTACIO EXPRESS

//configuracion
app.use(express.json()); //PARA QUE EXPRESS LEA JSON DEL BODY
app.use(express.urlencoded({ extended: false })); //PARA QUE EXPRESS LEA JSON DEL BODY

//configuracion para nuestras vistas
app.set('view engine', '.hbs');
app.set('views', 'src/views');
app.engine('.hbs', exphbs.engine({
    default: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

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