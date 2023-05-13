const express = require('express');

const app = express();

//configuracion
app.use(express.json());
//app.use(express.urlencoded({ extended: false }))

app.get('', (req, res) => {

    const { param1, param2 } = req.query;

    res.json(
        {
            "param1": param1,
            "param2": param2
        }
    );
});

app.post('/usuario', (req, res) => {

    const { usuario, password } = req.body;

    if (usuario === 'j.ellies' && password === '123456') {
        return res.json({
            "valido": true
        });
    } else {
        return res.json({
            "valido": false
        });
    }

});

app.get('/tareas', (req, res) => {
    res.json({ "ruta": "tareas" });
})

app.listen(4000, () => {
    console.log("servidor iniciado");
});