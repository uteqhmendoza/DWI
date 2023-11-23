const express = require("express")
const router = express.Router()
const ControllerUsuario = require('../../controllers/usuario')
const RepositorioUsuario = require('../../database/RepositorioUsuario')
const controlador = new ControllerUsuario(new RepositorioUsuario());

//npm install jsonwebtoken --Save
const jwt = require('jsonwebtoken');

router.post('/',async (req,res) => {
    res.status(200)
    
    if (!await controlador.validarLoginUsuario(req.body.email,req.body.password))
    {
        return res.status(400).json({error: 'Usuario o pasword incorrecto'})
    }

    const token = jwt.sign({ user: req.body.email,}, 
        process.env.JWT_SECRET_KEY,
        {expiresIn : '25d'})

    res.cookie('access_token', token, {
            expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)), 
            secure: true, 
            httpOnly: true, 
            sameSite: 'none' 
    });

    res.json({
        data: {token}
    })
});


router.post('/verificaToken',async (req,res) => {
    const authHeader = req.header('authorization')
    const token = authHeader && authHeader.split(" ")[1]
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verificado = jwt.verify(token, clave_secreta)
        res.status(400).json({data: verificado})
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
});
module.exports = router;