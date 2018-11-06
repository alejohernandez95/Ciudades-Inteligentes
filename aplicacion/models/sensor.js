'use strict'
////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose')
const Schema = mongoose.Schema
///////////////////////////////////////////////////////////////////
const SensorSchema = Schema ({
  ubicacion: {type: Number, default: 0},
  hora: {type: Number, default: 0},
  dia: {type: Number, default: 0},
  mes: {type: Number, default: 0},
  año: {type: Number, default: 0},
  rayosuv: {type: Number, default: 0},
  sonido: {type: Number, default: 0},
  gases: {type: Number, default: 0},
})
module.exports = mongoose.model('Sensor', SensorSchema)
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
