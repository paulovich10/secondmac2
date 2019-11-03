const db = require('../db');

const insertProduct = ({ producto, modelo, numero_serie, descripcion, imagenes, complementos, caja_original, listo_envio, precio }) => {
    return new Promise((resolve, reject) => {
        db.get().query('insert into productos (producto, modelo, numero_serie, descripcion, imagenes, complementos, caja_original, listo_envio, precio) values (?,?,?,?,?,?,?,?,?)', [producto, modelo, numero_serie, descripcion, imagenes, complementos, caja_original, listo_envio, precio], (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from productos where id = ?', [productId], (err, rows) => {
            if (err) reject(err)
            rows.length == 0 ? resolve('Error, no existe producto con ese id') : resolve(rows[0]);

        })

    })

}

module.exports = {
    insertProduct: insertProduct,
    getProductById: getProductById

}