const express = require("express")
const path = require("path")
var bodyParser = require('body-parser');
const app = express()
const jwt = require('jsonwebtoken');
//npm install dotenv
const dotenv = require('dotenv');
//npm install cors
var cors = require('cors')
//npm install cookie-parser
const cookieParser = require('cookie-parser');

dotenv.config(); 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser())
app.use(cors({
    origin: [
        'http://localhost:5173'
    ],
    methods: ['GET','POST' ,'PUT', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
    maxAge: 600,
    exposedHeaders: ['*', 'Authorization', ]
}));

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'))

const validarToken =  (req,res,next) => {
    
    const token = req.cookies.access_token;
    
    if (!token) {
        const authHeader = req.header('authorization')
        authHeader && authHeader.split(" ")[1]
    }

    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    
    try {
        const verificado = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(verificado)
    } catch (error) {
        return res.status(400).json({error: 'token no es válido'})  
    }

    next();
}

const alumnos = require("./rutas/api/alumnos");
const alumno = require("./rutas/alumno");
const login = require("./rutas/api/login")
const registro = require("./rutas/api/registro")

app.use('/api/alumno',validarToken,alumnos)
app.use('/alumnos',alumno)
app.use('/api/registro',registro)
app.use('/api/login', login)
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(3000,() => {
    console.log("Servicio inicio correctamente.")
})