'use strict'
/////////////////////////////libreria npm/////////////////////
const express = require('express')
const SensorCtrl = require('../controllers/sensor')
const api = express.Router()
//////////////////////////////////////////////////////////////////////////////controladores
api.get('/sensor', SensorCtrl.getSensor)// muestra los datos globales
api.get('/sensor/:sensorId',SensorCtrl.getSensor)/////////////busca segun el id de los datos
api.post('/sensor', SensorCtrl.saveSensor)// guarda los sensores
api.put('/sensor/:sensorId',SensorCtrl.updateSensor)// actualiza los datos si es nesesario
api.delete('/sensor/:sensorId',SensorCtrl.deleteSensor)// borra unos datos segun su id
////////////////////////////////////////////////////////////////
module.exports = api
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
