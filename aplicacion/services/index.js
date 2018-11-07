'use strict'
const jwt = require ('jwt-simple')
const moment = require('moment')//ayuda en las fechas
const config = require('../config')
/////funcion para crear web Token
function createToken (user){
  const payload ={
    sub: user._id,
    //momento en el que se creo
    iat: moment().unix(),
    //tiempo de caducacion token
    exp: moment().add(14,'days').unix(),
  }
  //codifica
  return jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = createToken
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
