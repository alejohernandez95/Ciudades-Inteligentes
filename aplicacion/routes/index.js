'use strict'
/////////////////////////////libreria npm/////////////////////
const express = require('express')
const SensorCtrl = require('../controllers/sensor')
const api = express.Router()
//////////////////////////////////////////////////////////////////////////////controladores
api.get('/sensor', SensorCtrl.getSensor)// muestra los datos globales
api.get('/sensor/:sensorId',SensorCtrl.getSensorID)/////////////busca segun el id de los datos
api.get('/sensor/ubicacion/:sensorU',SensorCtrl.getUbicacion)///////////busca segun getUbicacion
api.get('/sensor/año/:sensorA',SensorCtrl.getAño)//////busca segun año
api.post('/sensor', SensorCtrl.saveSensor)// guarda los sensores
api.put('/sensor/:sensorId',SensorCtrl.updateSensor)// actualiza los datos si es nesesario
api.delete('/sensor/:sensorId',SensorCtrl.deleteSensor)// borra unos datos segun su id
api.delete('/sensor',SensorCtrl.deleteAll)//borra todo los datos
////////////////////////////////////////////////////////////////
module.exports = api
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
