' use strict'

const services= require('../services')
///funcion para ver si se tiene autorizacion
function isAuth (req, res, next){
  if (!req.headers.authorization){
    //si no se tiene
    return res.status(403).send({ message: 'no tienes autorizacion'})
  }
  //si se tiene
   const token = req.headers.authorization.split(" ")[1]
  services.decodeToken(token)
  .then(response => {
    req.user = response
    next()
  })
  .catch(response =>{
    res.status(response.status)
  })
}

module.exports = isAuth
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
