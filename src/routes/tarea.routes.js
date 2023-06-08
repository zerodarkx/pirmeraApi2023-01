const { Router } = require('express');
const database = require('./../config/basedatos');

const route = Router();

route.get('/', async (req, res) => {

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
    `;

    const [rows] = await db.query(sql);

    res.json(
        {
            "ok": true,
            data: rows
        }
    );
});

route.post('/', async (req, res) => {

    const { titulo, descripcion, estado, fecha_termino, categoria } = req.body;
    const id_usuario = 1;

    const db = await database();

    const sql = `
        INSERT INTO tarea(titutlo, descripcion, estado, fecha_creacion, 
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
});

route.get('/:id', async (req, res) => {
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
});

route.put('/:id', (req, res) => {
    res.json(
        {
            "ok": true
        }
    );
});

route.delete('/:id', (req, res) => {
    res.json(
        {
            "ok": true
        }
    );
});

module.exports = route;