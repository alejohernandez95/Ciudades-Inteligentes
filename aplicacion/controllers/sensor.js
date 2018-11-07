'use strict'
///////////////////////////////libreria interna////////////////////////////////////////////////////////////////
const Sensor = require ('../models/sensor')
////////////mostrar los datos de un sensor con su ID
function getSensorID(req, res){
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
///////mostrar los datos segun su ubicacion /////////no funciona arreglar//////
function getUbicacion(req, res){
  let sensorU = Sensor.ubicacion
  Sensor.find(sensorU, (err, sensor) =>{
    if(err) return res.status(500).send({message: `error al encontrar los datos: ${err}`})
    if(!sensor) return res.status(404).send({message: `los datos del sensor no existe`})

    res.status(200).send({ sensor})
  })
}
///////mostrar los datos segun su año /////////no funciona arreglar//////
  function getAño(req, res){
  let sensorId = req.Sensor.año
  Sensor.find(sensorId, (err, sensor) =>{
    if(err) return res.status(500).send({message: `error al encontrar los datos: ${err}`})
    if(!sensor) return res.status(404).send({message: `los datos del sensor no existe`})

    res.status(200).send({ sensor})
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
//////////borra todo//no probado
function deleteAll(req, res){
  Sensor.find({},(err,sensor)=>{
    sensor.remove
  })
}

//////////////////////////////////////////////////////////////////////////////////////
module.exports={
  getSensorID,
  getSensor,
  getUbicacion,
  getAño,
  saveSensor,
  updateSensor,
  deleteSensor,
  deleteAll,
}
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
