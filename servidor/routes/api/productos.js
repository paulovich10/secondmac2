let express = require('express');
let router = express.Router();

let modelProductos = require('../../models/productos');


router.post('/uploadProducto', async (req, res) => {

    let resultado = null;
    let producto = null;

    try {
        resultado = await modelProductos.insertProduct(req.body);
        producto = await modelProductos.getProductById(resultado.insertId)

    } catch {
        res.json(err)

    }

    res.json(producto);
})


module.exports = router;

