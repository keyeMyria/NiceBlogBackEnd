var mongoose = require('mongoose');
var UserSchema = require('../../dao/schemas/UserSchema');
var UserModel = mongoose.model('user', UserSchema);

UserModel.getAllUsers = function(callback) {
    return this.find().sort('updateAt').exec(callback);
}

UserModel.findUserById = function(id, callback) {
    return this.findOne({ _id: id }).exec(callback);
}

UserModel.createUser = function(user, callback) {
    return UserModel.create(user, callback);
}

UserModel.updateUserInfo = function(id, newInfo, options, callback) {
    var query = { _id: id };
    var update = {
        name: newInfo.name
    };
    return UserModel.findOneAndUpdate(query, update, options, callback);
}

UserModel.deleteUserById = function(id, callback) {
    var query = { _id: id };
    return UserModel.remove(query, callback);
}

module.exports = UserModel;
