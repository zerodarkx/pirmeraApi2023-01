const usuarios = [
    {
        id: 1,
        nombre: "Julio",
        apellido: "Ellies",
        edad: 29
    },
    {
        id: 2,
        nombre: "Pepito",
        apellido: "Contreras",
        edad: 44
    },
    {
        id: 3,
        nombre: "Juanito",
        apellido: "Soto",
        edad: 15
    }
];

const obtenerTodo = (req, res) => {
    res.json(usuarios);
}

const obtenerUnoSolo = (req, res) => {
    //obtener el id por la url
    const { id } = req.params;
    const resultado = usuarios.filter(usuario => usuario.id == id);

    res.json(resultado);
}

const agregarUsuario = (req, res) => {
    // console.log(req.body);
    const { id, nombre, apellido, edad } = req.body;

    if (id === '') {
        return res.status(403).json({
            "msj": "error",
            "error": "favor agregar id"
        });
    }
    if (nombre === '') {
        return res.status(403).json({
            "msj": "error",
            "error": "favor agregar nombre"
        });
    }
    if (apellido === '') {
        return res.status(403).json({
            "msj": "error",
            "error": "favor agregar apellido"
        });
    }
    if (edad === '') {
        return res.status(403).json({
            "msj": "error",
            "error": "favor agregar edad"
        });
    }

    const usuario = {
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "edad": edad
    };

    usuarios.push(usuario);

    res.json({
        "msj": "Usuario Agregado Correctamente",
        "usuario": usuario
    });
}

const editarUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad } = req.body;

    usuarios[id - 1]["nombre"] = nombre;
    usuarios[id - 1]["apellido"] = apellido;
    usuarios[id - 1]["edad"] = edad;

    res.json({
        "msj": "usuario modificado",
        "usuario": usuarios[id - 1]
    });
}

const eliminarUsuario = (req, res) => {
    const { id } = req.params;

    const resultado = usuarios.map(
        (usuario) => {
            if (usuario.id != id) {
                return usuario;
            }
        }
    );

    res.json({
        "msj": "usuario eliminado",
        "usuarios": resultado
    });
}

module.exports = {
    obtenerTodo,
    obtenerUnoSolo,
    agregarUsuario,
    editarUsuario,
    eliminarUsuario
}