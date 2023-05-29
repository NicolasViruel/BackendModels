const express = require("express");
const contactoController = require("../controllers/ContactoController")

const router = express.Router()
//Traer los mensajes
router.get('/' , contactoController.contactoGet);
//Crear Mensaje
router.post('/nuevoMensaje' , contactoController.crearMensaje)

module.exports = router