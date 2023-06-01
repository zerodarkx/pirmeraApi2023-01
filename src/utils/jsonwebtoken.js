const jwt = require('jsonwebtoken');

const crearToken = ( usuario ) => {
    const token = jwt.sign(
        { usuario },
        process.env.SECRETO);

    return token;
}

const verificarToken = ( token ) => {
    try {
        const existo = jwt.verify(token, process.env.SECRETO);
        return existo;
    } catch (error) {
        return false;
    }
}

module.exports = {
    crearToken,
    verificarToken
}