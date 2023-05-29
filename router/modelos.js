const express = require("express");
const modelosController = require("../controllers/modelosController")

const router = express.Router()
//traer los contactos
router.get('/', modelosController.modelosGet)
//traer solo una modelo
router.get('/:id', modelosController.modeloGet)
//Jquery Filter
router.get('/filter', modelosController.Filter)
//crear un contacto
router.post('/newcontact', modelosController.nuevaModelo)
//Editar un contacto
router.get('/editcontact/:id', modelosController.editarModelo)
//Borrar un contacto
router.delete('/deletecontact/:id' , modelosController.borrarModelo)
//Actualizar un contacto
router.put('/updatecontact/:id' , modelosController.updateModelo)


module.exports = router