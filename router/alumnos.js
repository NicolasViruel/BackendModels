const express = require("express");
const alumnosController = require("../controllers/alumnosController")

const router = express.Router()
//traer los alumnos
router.get('/' , alumnosController.alumnosGet);
//traer un solo alumno
router.get('/:id' , alumnosController.alumnoGet);
//crear un alumno
router.post('/nuevoAlumno' , alumnosController.nuevoAlumno);
//borrar un alumno
router.delete('/borrarAlumno/:id' , alumnosController.borrarAlumno);
//editar un alumno
router.put('/editarAlumno/:id' , alumnosController.editarAlumno);




module.exports = router