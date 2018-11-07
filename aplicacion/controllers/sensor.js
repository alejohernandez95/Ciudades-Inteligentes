'use strict'
///////////////////////////////libreria interna////////////////////////////////////////////////////////////////
const Sensor = require ('../models/sensor')
////////////mostrar los datos de un sensor con su ID
function getSensor(req, res){
  let sensorId = req.params.sensorId
  Sensor.findById(sensorId, (err, sensor) =>{
    if(err) return res.status(500).send({message: `error al encontrar los datos: ${err}`})
    if(!sensor) return res.status(404).send({message: `los datos del sensor no existe`})

    res.status(200).send({ sensor})
  })
}
//////////mostrar los datos de todos los sensores
function getSensor(req, res){
  Sensor.find({},(err,sensor)=>{
    if(err) return res.status(500).send({message: `error al encontrar los datos: ${err}`})
    if(!sensor) return res.status(404).send({message: `no existen sensores`})
    res.send(200, {sensor})
  })
}
/////////subir datos nuevos
function saveSensor(req, res){
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
}
///////actualizar los datos del sensor con su id
function updateSensor(req, res){
  let sensorId = req.params.sensorId
  let update = req.body
  Sensor.findByIdAndUpdate(sensorId, update, (err, sensorUpdate)=>{
    if (err) res.status(500).send({message:`error al actualizar los datos: ${err}`})
    res.status(200).send({ sensor: sensorUpdate })
  })
}
//////borrar los datos de un sensor  con su id
function deleteSensor(req, res){
  let sensorId = req.params.sensorId
  Sensor.findById(sensorId, (err, sensor) =>{
    if (err) res.status(500).send({message:`error al borrar los datos: ${err}`})

    sensor.remove(err => {
      if (err) res.status(500).send({message:`error al borrar los datos: ${err}`})
      res.status(200).send({message: 'los datos han sido borrados'})
    })
  })
}
//////////////////////////////////////////////////////////////////////////////////////
module.exports={
  getSensor,
  getSensor,
  saveSensor,
  updateSensor,
  deleteSensor,
}
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
