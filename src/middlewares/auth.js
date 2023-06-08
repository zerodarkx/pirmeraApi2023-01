const jwt = require('./../utils/jsonwebtoken')

const tengoToken = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split(" ").pop();

    const existo = jwt.verificarToken(token);

    if (!existo) {
        //que no puedo seguir trabajando
        return res.status(400).json(
            {
                "ok": false,
                "msj": "token no valido"
            }
        );
    }

    next();
}

module.exports = {
    tengoToken
}