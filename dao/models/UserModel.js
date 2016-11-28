var mongoose = require('mongoose')
var UserSchema = require('../../dao/schemas/UserSchema')
var UserModel = mongoose.model('UserModel', UserSchema)

module.exports = UserModel
