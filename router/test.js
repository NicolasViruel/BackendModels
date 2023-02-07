const express = require("express");
const testController = require("../controllers/testController")

const router = express.Router()
//traer los contactos
router.get('/', testController.test)
//Jquery Filter
router.get('/filter', testController.Filter)
//crear un contacto
router.post('/newcontact', testController.newContact)
//Editar un contacto
router.get('/editcontact/:id', testController.editContact)
//Borrar un contacto
router.delete('/deletecontact/:id' , testController.deleteContact)
//Actualizar un contacto
router.put('/updatecontact/:id' , testController.updateContact)


module.exports = router