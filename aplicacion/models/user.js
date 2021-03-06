'use strict'
///////////////libreria npm
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')//libreria para encriptar
const crypto= require ('crypto')
//////////////se crea un nuevo esquema
const UserSchema = new Schema({
  email: {type:String, unique: true, lowercase:true},
  displayName:String,
  avatar:String,
  password:{type:String,},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: Date,
})
//para encriptar contraseña
UserSchema.pre('save', (next) => {
  let user = this
  //if (!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

//para poner un avatar
UserSchema.methods.gravatar = function (){
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`
  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}
module.exports = mongoose.model('User', UserSchema)
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
