const { validationResult } = require('express-validator');
const { httpError } = require('./error');

const validadorResultado = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        return httpError(res, error.array());
    }
}


module.exports = {
    validadorResultado
}