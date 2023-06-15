const { check } = require('express-validator');
const { validadorResultado } = require('./../utils/validacion');

const validadorTarea = [
    check('titulo')
        .exists().withMessage("Favor ingresar titulo en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 3, max: 64}).withMessage("Favor este campo debe etnner un minimo de 3 y un maximo 64"),
    check('descripcion')
        .exists().withMessage("Favor ingresar descripcion en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 3, max: 64}).withMessage("Favor este campo debe etnner un minimo de 3 y un maximo 64"),
    check('estado')
        .exists().withMessage("Favor ingresar estado en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isInt({min: 0, max: 1}).withMessage("Favor solo debe ingresar si 1 o 0"),
    check('fecha_termino')
        .exists().withMessage("Favor ingresar fecha termino en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isDate().withMessage("Favir ingresar una fecha valida"),
    check('categoria')
        .exists().withMessage("Favor ingresar categoria en JSON")
        .notEmpty().withMessage("Favor este campo no puede venir vacio")
        .isLength({min: 3, max: 64}).withMessage("Favor este campo debe etnner un minimo de 3 y un maximo 64"),
    (req, res, next) => {
        return validadorResultado(req, res, next);
    }
];

module.exports = {
    validadorTarea
}