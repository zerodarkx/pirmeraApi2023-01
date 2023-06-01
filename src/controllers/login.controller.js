const database = require('./../config/basedatos');
const jwt = require('./../utils/jsonwebtoken');
const { desencriptar } = require('./../utils/password');

const login = async (req, res) => {
    const { user, password } = req.body;

    const db = await database();
    const sql = `SELECT * 
                    FROM usuario 
                    WHERE user = '${user}'`;
    const [row] = await db.query(sql);

    if (!row.length) {
        return res.json({
            "ok": false,
            "msj": "usuario no exisite"
        });
    }

    const existo = desencriptar(password, row[0].password);

    if(!existo){
        return res.json({
            "ok": false,
            "msj": "contraseña invalida"
        });
    }

    const usuario = {
        nombre: row[0].nombre,
        apellido: row[0].apellido,
        activo: row[0].activo
    };

    const token = jwt.crearToken(usuario);

    res.json({
        "ok": true,
        token
    });
}

const verificar = async (req, res) => {
    const { token } = req.body;

    const existo = jwt.verificarToken(token);
    res.json({
        ok: existo
    });

}

module.exports = {
    login,
    verificar
}