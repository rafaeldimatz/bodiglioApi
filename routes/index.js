const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const loginController = require('../controllers/loginController');

module.exports= function(){
/* PRODUCTOS */	
router.post('/cliente',clienteController.nuevoCliente); //Agregar Cliente
router.get('/cliente/:idCliente',clienteController.clienteid); //Obtener cliente por Id
router.get('/clientes',clienteController.clientes); //Obtener todos los clientes
router.put('/clienteUpdate/:idCliente',clienteController.clienteUpdate); //Modificar cliente por Id
router.delete('/clienteRemove/:idCliente',clienteController.clienteRemove); //Modificar cliente por Id
//router.get('/personalApe/:apellido',clienteController.apellidoPersonal);

/* LOGIN */
router.post('/login',loginController.datosLogin)

 return router
}