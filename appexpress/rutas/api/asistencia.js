const express = require("express")
const Controller = require('../../controllers/Asistencias')
const RepositorioAsistencia = require('../../database/RepositorioAsistencia')
const controlador = new Controller(new RepositorioAsistencia());
const router = express.Router();

router.get('/',async (req,res) =>{
    controlador.obtenerAsistencias()
    .then((alumnos) => res.json(alumnos)) 
});

router.post('/',async (req,res) => {
    controlador.agregarAsistencia(
        req.body.email, 
        req.body.materia,
        req.body.grupo,
        req.body.fecha)
    res.status(200)
    res.json({ message : req.body.name})
});

module.exports = router;