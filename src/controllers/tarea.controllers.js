const database = require('./../config/basedatos');
const { httpError } = require('./../utils/error');


const obtenerTareas = async (req, res) => {

    const db = await database();

    const sql = `
        SELECT 
            t.id_tarea,
            t.titulo,
            t.descripcion,
            t.fecha_creacion,
            t.fecha_termine,
            CASE t.estado
                WHEN 1 THEN 'Procesando'
                ELSE 'Aun me falta'
            END AS estado,
            u.id_usuario,
            CONCAT(u.nombre, ' ', u.apellido)
        FROM tarea t
        INNER JOIN usuario u ON u.id_usuario = t.id_usuario
    `;

    const [rows] = await db.query(sql);

    res.json(
        {
            "ok": true,
            data: rows
        }
    );
}

const agregarTarea = async (req, res) => {

    const { titulo, descripcion, estado, fecha_termino, categoria } = req.body;
    const id_usuario = 1;

    const db = await database();

    const sql = `
        INSERT INTO tarea(titulo, descripcion, estado, fecha_creacion, 
            fecha_termine, categoria, id_usuario)
        VALUES('${titulo}', '${descripcion}', '${estado}', NOW(), '${fecha_termino}', 
            ${categoria}, ${id_usuario})
    `;

    const [resultado] = await db.query(sql);

    if (!resultado.insertId) {
        return res.json(
            {
                "ok": false,
                "msj": "no creaste nada"
            }
        );
    }

    res.json(
        {
            "ok": true
        }
    );
}

const obtenerTarea = async (req, res) => {
    const { id } = req.params;

    const db = await database();

    const sql = `
        SELECT
            t.id_tarea,
            t.titutlo,
            t.descripcion,
            t.fecha_creacion,
            t.fecha_termine,
            CASE t.estado
                WHEN 1 THEN 'Procesando'
                ELSE 'Aun me falta'
            END AS estado,
            u.id_usuario,
            CONCAT(u.nombre, ' ', u.apellido)
        FROM tarea t
        INNER JOIN usuario u ON u.id_usuario = t.id_usuario
        WHERE t.id_tarea = ${id}
    `;

    const [rows] = await db.query(sql);

    res.json(
        {
            "ok": true,
            data: rows
        }
    );
}

const editarTarea = async (req, res) => {

    try {
        const { id } = req.params;

        const { titulo, descripcion, estado, categoria } = req.body;

        const db = await database;

        const sql = `
            UPDATE tarea SET
                titulo = '${titulo}',
                descripcion = '${descripcion}',
                estado = ${estado},
                categoria = '${categoria}'
            WHERE id_tarea = ${id}
        `;

        const [resultado] = db.query(sql);

        if (!resultado.insertId) {
            return httpError(res, "Error al Editar");
        }

        return res.json({
            "ok": true,
            "msj": "Se edito correctamente"
        });

    } catch (error) {
        return httpError(res, "Error en editar tarea");
    }
}

const eliminarTarea = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await database();
        const sql = `DELETE FROM tarea WHERE id_tarea = ${id}`;
        const [resultado] = await db.query(sql);

        if (!resultado.affectedRows) {
            return httpError(res, "No se pudo eliminar nada");
        }

        return res.json(
            {
                "ok": true,
                "msj": "Tarea eliminada correctamente"
            }
        )

    } catch (error) {
        return httpError(res, "ERROR EN DELETE TAREA");
    }
}

module.exports = {
    obtenerTareas,
    agregarTarea,
    obtenerTarea,
    editarTarea,
    eliminarTarea
}