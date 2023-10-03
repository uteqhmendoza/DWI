const express = require("express")
const Controller = require('../controllers/alumnos')
const RepositorioAlumno = require('../database/RepositorioAlumno')
const controlador = new Controller(new RepositorioAlumno());
const router = express.Router();

router.get('/',async (req,res) =>{
    controlador.obtenerAlumnos()
    .then((alumnos) => {
        res.render('alumno.ejs',
        {   pageName : "Alumnos",
            alumnos :alumnos
        }
        )
    })
    
});

router.post('/',async (req,res) =>{
    await controlador.agregarAlumno(req.body.nombre, req.body.email);
    controlador.obtenerAlumnos()
    .then((alumnos) => {
        res.render('alumno.ejs',
        {   pageName : "Alumnos",
            alumnos :alumnos
        }
        )
    })
    
});


module.exports = router;