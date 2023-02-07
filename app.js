const express = require('express');
// body-parser
const bodyParser = require('body-parser')
//Inicializamos  Express
const app = express();




// parsear Body
app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.json())


module.exports = app;