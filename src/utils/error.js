const httpError = (res, msj, estado = 400) => {
    return res.status(estado).json(
        {
            "ok": false,
            "msj": msj
        }
    );
}

module.exports = {
    httpError
}