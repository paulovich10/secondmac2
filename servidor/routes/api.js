let express = require('express');
let router = express.Router();

let apiProductosRouter = require('./api/productos');
let apiUsuariosRouter = require('./api/usuarios');


router.use('/productos', apiProductosRouter)
router.use('/usuarios', apiUsuariosRouter);



module.exports = router;