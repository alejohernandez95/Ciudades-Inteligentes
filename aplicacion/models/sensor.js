'use strict'
////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose')
const Schema = mongoose.Schema
///////////////////////////////////////////////////////////////////
const SensorSchema = Schema ({
  ubicacion: {type: Number, default: 0},// se define de 1 a 25 segun la zona de la ciudad
  ////////los datos hora dia mes y año sera remplazado por //date: {type: Date, default: Date.now};//date: {type: Date, default: 8/24/2009}; {type: Date, default: Date.now()}
  hora: {type: Number, min: 0, max:24},// de momento se usa hora militar del 0 al 24
  dia: {type: Number, default:1},
  mes: {type: Number, min:1, max:12},//del 1 al 12
  año: {type: Number, default:0},
  rayosuv: {type: Number, default: 0},//fuerza de los rayos uv
  sonido: {type: Number, default: 0},// fuerza del sonido
  gases: {type: Number, default: 0},//fuerza de los gases contaminantes
})
module.exports = mongoose.model('Sensor', SensorSchema)
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
