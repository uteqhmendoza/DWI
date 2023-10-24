const express = require("express")
const path = require("path")
var bodyParser = require('body-parser');
const app = express()
//var cors = require('cors')
// prueba de pull request 
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use(cors())
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'))

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:517');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


const alumnos = require("./rutas/api/alumnos");
const alumno = require("./rutas/alumno");

app.use('/api/alumno',alumnos)
app.use('/alumnos',alumno)
app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(3000,() => {
    console.log("Servicio inicio correctamente.")
})