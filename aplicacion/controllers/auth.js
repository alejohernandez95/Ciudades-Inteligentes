'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service= require('../services')
//funcion para registrar nuevo usuario
function signUp(req, res){
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
  })
  //para guardar el usuario
  user.save((err) => {
    if (err) res.status(500).send({message:`error al crear el usuario: ${err}`})
    //crea un web token
    return res.status(200).send({ token: service.createToken(user)})
  })
}
function signIn(req, res){
  //
}

module.exports = {
  signUp,
  signIn,
}
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
