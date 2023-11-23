const express = require("express")
const ControllerUsuario = require('../../controllers/usuario')
const RepositorioUsuario = require('../../database/RepositorioUsuario')
const router = express.Router()
const controlador = new ControllerUsuario(new RepositorioUsuario());

router.post('/',async (req,res) => {
    controlador.agregarUsuario(req.body.username, req.body.password)
    res.status(200)
    res.json({ message : "Usuario registrado con exito"})
});

module.exports = router;