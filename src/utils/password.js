const bcrypt = require('bcrypt');

const encriptar = ( password ) => {
    const salt = 10;
    const encriptado = bcrypt.hashSync(password, salt);

    return encriptado;
}

const desencriptar = ( password, passwordHash) => {
    const existo = bcrypt.compareSync(password, passwordHash);
    console.log(existo);
    return existo;
}

module.exports = {
    encriptar,
    desencriptar
}