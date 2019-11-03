const mysql = require('mysql');

let pool = null;

const connect = (done) => {
    pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'secondmac',
        port: 8889,
        multipleStatements: true
    })
    done();
}

const get = () => {
    return pool;
}

module.exports = {

    connect: connect,
    get: get
}