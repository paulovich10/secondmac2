const db = require('../db');

//el registro va a ser solo email y contraseña, pondrá el resto null y hacr un update 


const insert = ({ email, nickname, contrasenha }) => {
    return new Promise((resolve, reject) => {
        let q = 'insert into usuarios (email, nickname, contrasenha) values (?, ?, ?)';
        db.get().query(q, [email, nickname, contrasenha], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

const getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from usuarios where email= ?',
            [email], (err, rows) => {

                if (err) reject(err)
                rows.length == 0 ? resolve(false) : resolve(rows[0]);


            })

    })

}

const getById = (usuarioId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from usuarios where id = ?',
            [usuarioId], (err, rows) => {
                if (err) reject(err)
                rows.length == 0 ? resolve('No existe usuario con ese id') : resolve(rows[0]);

            })

    })

}

const getByNickname = (nickname) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from usuarios where nickname = ?',
            [nickname], (err, rows) => {
                if (err) reject(err)
                if (rows.length != 1) resolve(null)

                resolve(rows[0])

            })
    })
}

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from usuarios', (err, result) => {

            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {

    insert: insert,
    getById: getById,
    getByEmail: getByEmail,
    getByNickname: getByNickname,
    getAll: getAll
}