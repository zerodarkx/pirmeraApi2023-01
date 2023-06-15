//REQUIERO TODOS LOS METODOS PARA NUESTRO ARCHIVO
const database = require('./../config/basedatos');
const jwt = require('./../utils/jsonwebtoken');
const { desencriptar } = require('./../utils/password');

//GENERO FUNCION PARA VALIDAR EL LOGIN, DONDE NECESITO COMO PARAMETROS EL REQ(REQUEST) Y RES(RESPONSE)
//REQ => LO QUE YO RECIBO AL SERVIDOR
//RES => LO QUE YO ENVIO AL CLIENTE
const login = async (req, res) => {
    //AGREGAMOS TRY-CATCH PARA QUE NUESTRA API NO SE CAIGA DE FORMA ABRUPTA
    try {
        //DESCONTRUIMOS EL OBJETO BODY OBTENIENDO SOLO LOS CAMPOS A USAR
        const { user, password } = req.body;
        //INSTACIA DE NUESTRA BASE DE DATOS
        const db = await database();
        //GENERAMOS QUERY A EJECUTAR
        const sql = `SELECT * 
                    FROM usuario 
                    WHERE user = '${user}'`;
        /**
         * DESCONTRUIMOS NUESTRO ARREGLO DE RESULTADO DE LA QUERY
         * DONDE EL NOMBRE QUE LE DEMOS A CADA UNO DE ELLOS ES A GUSTO PROPIO
         * RESPETANDO EL ORDEN QUE TENGA ESTE ARREGLO
         */
        const [row, ASDA] = await db.query(sql);

        //VERIFICO SI MIS FILAS TRAEN INFORMACION, RECORDARNDO QUE NUESTRA VARIABLE ES UN ARREGLO
        if (!row.length) {
            return res.json({
                "ok": false,
                "msj": "usuario no exisite"
            });
        }
        //COMPRUEBO SI LA CONTRASEÑA QUE INGRESE POR JSON ES LA MISMA QUE EN LA BASE
        const existo = desencriptar(password, row[0].password);

        //VALIDO QUE ESTO SEA VERDADERO
        if (!existo) {
            return res.json({
                "ok": false,
                "msj": "contraseña invalida"
            });
        }

        //GENERO UN OBJETO CON LA INFORMACION QUE LE MANDEMOS AL PAYLOAD DEL TOKEN
        const usuario = {
            id: row[0].id_usuario,
            nombre: row[0].nombre,
            apellido: row[0].apellido,
            activo: row[0].activo
        };

        //GENERAMOS NUESTRO TOKEN
        const token = jwt.crearToken(usuario);

        //RESPONEMOS AL CLIENTE CON EL TOKEN
        res.json({
            "ok": true,
            token
        });
    } catch (error) {
        //EN CASO DE HABER ERROR EN EL TRY, MANDAMOS QUE OCURRIO ALGO
        return httpError(res, "Ocurrio algo en Login");
    }
}

const verificar = async (req, res) => {
    try {
        res.json({
            ok: true
        });
    } catch (error) {
        return httpError(res, "Ocurrio algo en Verificar");
    }

}

module.exports = {
    login,
    verificar
}