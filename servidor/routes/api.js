let express = require('express');
let router = express.Router();

let apiUsuariosRouter = require('./api/usuarios');


router.use('/usuarios', apiUsuariosRouter);


module.exports = router;