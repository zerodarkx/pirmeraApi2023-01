const mysql = require('mysql2/promise')
// const { configDatabase } = require("./config");

const configDatabase = {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'prueba'
}

const connection = async () => {
    console.log('conexion realizada');
    return await mysql.createConnection(configDatabase)
}

module.exports = connection