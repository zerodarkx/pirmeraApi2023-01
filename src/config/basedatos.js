const mysql = require('mysql2/promise')

const configDatabase = {
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
}

const connection = async () => {
    console.log('conexion realizada');
    return await mysql.createConnection(configDatabase)
}

module.exports = connection