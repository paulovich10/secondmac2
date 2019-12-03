let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');
let jwt = require('jwt-simple')
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

    req.body.contrasenha = bcrypt.hashSync(req.body.contrasenha, 10);
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
            //console.log('usuario', usuario)
            //console.log(result)
        } catch (err) {
            console.log(err);
        }

        res.json(usuario);
        console.log(usuario)

        //esta es la respuesta del servidor: almaceno en el token el id de usuario,  cuando se ha creado y cuándo expira. La respuesta que llega al servicio del front es token y username. 
        // res.json({
        //     token: createToken(usuario),
        //     username: usuario.usuario
        // });


    } catch (err) {
        res.json(err);
    }
});


router.post('/login', (req, res) => {
    modelUsuarios.getByEmail(req.body.email)
        .then((user) => {
            if (user == null) return res.json({ error: 'email y/o contraseña erroneos' })
            bcrypt.compare(req.body.contrasenha, user.contrasenha, (err, same) => {
                if (err) return res.json({ error: 'Error!!!!' })
                if (!same) return res.json({ error: 'Usuario y o contraseña erroneos (2)' })
                res.json(user);
            })

        })

        .catch(err => {
            res.json(err)
        })
})

// const createToken = (pUser) => {

//     const payload = {

//         userId: pUser.id,
//         createdAt: moment().unix(),
//         expiresAt: moment.add(20, 'minutes').unix()

//     }

//     return jwt.encode(payload, process.env.TOKEN_KEY)
// }


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
