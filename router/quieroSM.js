const express = require("express");
const quieroSMController = require("../controllers/quieroSMController")

const router = express.Router()
//Traer los mensajes QuieroSM
router.get('/' , quieroSMController.quieroSMGet);
//Crear QuieroSM
router.post('/nuevoMensaje' , quieroSMController.crearQuieroSM)

module.exports = router