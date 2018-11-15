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
function decodeToken (token){
  const decoded= new Promise((resolve, reject) =>{
    try {
      const payload= jwt.decode(token, config.SECRET_TOKEN)
      if(payload.exp <= moment().unix()){
        resolve({
          status: 401,
          message: 'el token ha expirado'
        })
      }
      resolve(payload.sub)
    } catch (err){
      reject({
        status: 500,
        message: 'Invalid Token'
      })
    }
  })
  return decoded
}

module.exports = {
  createToken,
  decodeToken,
}
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
