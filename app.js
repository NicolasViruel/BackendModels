const express = require('express');
// body-parser
const bodyParser = require('body-parser')
//Inicializamos  Express
const app = express();
//importamos Cors
const cors = require("cors")



// parsear Body
app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.json())
//inicializamos Cors
app.use(cors())

//routers
const modelosRoutes = require("./router/modelos")
const alumnosRoutes = require("./router/alumnos")
const contactoRoutes = require("./router/contacto")
const quieroSMRoutes = require("./router/quieroSM")

//rutas
app.use('/modelo', modelosRoutes);
app.use('/api/Alumnos', alumnosRoutes);
app.use('/api/Contacto', contactoRoutes);
app.use('/api/QuieroSM', quieroSMRoutes);


module.exports = app;