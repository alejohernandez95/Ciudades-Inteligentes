'use strict'
/////////////////////////////libreria npm/////////////////////
const express = require('express')
const SensorCtrl = require('../controllers/sensor')
const UserCtrl = require ('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()
//////////////////////////////////////////////////////////////////////////////controladores
api.get('/sensor', SensorCtrl.getSensor)// muestra los datos globales
api.get('/sensor/:sensorId',SensorCtrl.getSensorID)/////////////busca segun el id de los datos
api.get('/sensor/ubicacion/:sensorU',SensorCtrl.getUbicacion)///////////busca segun getUbicacion
api.get('/sensor/año/:sensorA',SensorCtrl.getAño)//////busca segun año
//authentifica al usuario error que debe solucionarse
api.post('/sensor', SensorCtrl.saveSensor)// guarda los sensores
api.put('/sensor/:sensorId',SensorCtrl.updateSensor)// actualiza los datos si es nesesario
api.delete('/sensor/:sensorId',SensorCtrl.deleteSensor)// borra unos datos segun su id
api.delete('/sensor',SensorCtrl.deleteAll)//borra todo los datos
api.post('/signin', UserCtrl.signIn)
api.post('/signup', UserCtrl.signUp)
///autentificar usuarios a cierto url
///se agrega auth para el metodo autentificar
api.get('/private', auth , (req, res) => {
  res.status(200).send({message: 'tienes acceso'})
})
////////////////////////////////////////////////////////////////
module.exports = api
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
