'use strict'
/////////////////////////////libreria npm/////////////////////////////////////////////////////////////
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
///////////////////////////////libreria interna////////////////////////////////////////////////////////////////
const Sensor = require ('./models/sensor')
/////////////////////////////express/////////////////////////////////////////////////////////////
const app = express()
const port = process.env.PORT || 3001
/////////////////////////////bodyParser//////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
/////////////////////////get////////////////////////////////////////////////////////////////
app.get('/api/sensor', (req, res) => {
  Sensor.find({},(err,sensor)=>{
    if(err) return res.status(500).send({message: `error al encontrar los datos: ${err}`})
    if(!sensor) return res.status(404).send({message: `no existen sensores`})
    res.send(200, {sensor})
  })
})
app.get('/api/sensor/:sensorId',(req, res) => {
  let sensorId = req.params.sensorId
  Sensor.findById(sensorId, (err, sensor) =>{
    if(err) return res.status(500).send({message: `error al encontrar los datos: ${err}`})
    if(!sensor) return res.status(404).send({message: `los datos del sensor no existe`})

    res.status(200).send({ sensor})
  })
})
//////////////////////post//////////////////////////////////////////////////////////////////
app.post('/api/sensor', (req, res) => {
  console.log('POST /api/sensor')
  console.log(req.body)
  let sensor= new Sensor()
  sensor.ubicacion = req.body.ubicacion
  sensor.hora = req.body.hora
  sensor.dia = req.body.dia
  sensor.mes = req.body.mes
  sensor.año = req.body.año
  sensor.rayosuv = req.body.ubicacion
  sensor.sonido = req.body.ubicacion
  sensor.gases = req.body.ubicacion

  sensor.save((err, sensorStored) => {
    if (err) res.status(500).send({message:`error al salvar en la base de datos: ${err}`})

    res.status(200).send({sensor: sensorStored})
  })
})
//////////////////////////put///////////////////////////////////////////////////////////////
app.put('/api/sensor/:sensorId',(req, res) => {
  let sensorId = req.params.sensorId
  let update = req.body
  Sensor.findByIdAndUpdate(sensorId, update, (err, sensorUpdate)=>{
    if (err) res.status(500).send({message:`error al actualizar los datos: ${err}`})
    res.status(200).send({ sensor: sensorUpdate })
  })
})
/////////////////////////delete////////////////////////////////////////////////////////////////
app.delete('/api/sensor/:sensorId',(req, res) => {
  let sensorId = req.params.sensorId
  Sensor.findById(sensorId, (err, sensor) =>{
    if (err) res.status(500).send({message:`error al borrar los datos: ${err}`})

    sensor.remove(err => {
      if (err) res.status(500).send({message:`error al borrar los datos: ${err}`})
      res.status(200).send({message: 'los datos han sido borrados'})
    })
  })
})
////////////////////mongo/////////////////////////////////////////////////////////////////////
mongoose.connect('mongodb://localhost/datos',(err, res)=>{
  if (err) {
    return console.log(`error al conectar a la base de datos:${err}`)
  }
  console.log('conexiona la base de datos establecida...')

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
  })
})
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
