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


module.exports = app;