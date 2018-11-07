' use strict'

const jwt = require ('jwt-simple')
const moment= require ('moment')
const config= require('../config')
///funcion para ver si se tiene autorizacion
function isAuth (req, res, next){
  if (!req.headers.authorization){
    //si no se tiene
    return res.status(404).send({ message: 'no tienes autorizacion'})
  }
  //si se tiene
  const token = req.headers.authorization.split(" ")[1]
  //para decodificar
  const payload = jwt.decode(token, config.SECRET_TOKEN)
  //en caso de que la sesion haya expirado
  if(payload.exp <= moment().unix()){
    return res.status(401).send({message: 'el token ha expirado'})
  }
  //si se tiene autorizacion
  req.user =payload.sub
  next()
}

module.exports = isAuth
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
