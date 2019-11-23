let express = require('express');
let router = express.Router();
//const bcrypt = require('bcrypt');

let modelUsuarios = require('../../models/usuarios');
//let modelProductos = require('../../models/productos');

// router.get('/:usuarioId', (req, res) => {

//     modelUsuarios.getById(req.params.usuarioId)
//         .then(usuario => res.json(usuario))
//         .catch(err => res.json(err));
// })

// router.post('/', (req, res) => {
//     modelUsuarios.insert(req.body)
//         .then(result => res.json(result))
//         .catch(err => res.json(err));
// });



router.post('/registro', async (req, res) => {
    console.log(req.body);
    //req.body.password = bcrypt.hashSync(req.body.password, 10);

    try {
        let email = await modelUsuarios.getByEmail(req.body.email)
        let username = await modelUsuarios.getByNickname(req.body.nickname)
        if (email) {
            return res.json({ error: 'El email de usuario ya existe' })
        }
        if (username) {
            return res.json({ error: 'El usuario ya existe' })
        }

        let result = null;
        let usuario = null;
        try {
            result = await modelUsuarios.insert(req.body);
            usuario = await modelUsuarios.getById(result.insertId);
        } catch (err) {
            console.log(err);
        }

        res.json(usuario);
        //res.json({
        //     token: createToken(usuario),
        //     username: usuario.usuario
        // });


    } catch (err) {
        res.json(err);
    }
});


// router.post('/producto', async (req, res) => {

//     let resultado = null;
//     let product = null;
//     try {
//         resultado = await modelProductos.insertProduct(req.body);
//         product = await modelProductos.getProductById(resultado.insertId)

//     } catch (err) {

//         console.log(err)
//     }

//     res.json(product);
// });

module.exports = router;
