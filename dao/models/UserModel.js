'use strict';

var mongoose = require('mongoose');
var UserSchema = require('../../dao/schemas/UserSchema');
var UserModel = mongoose.model('user', UserSchema);
var dbHelper = require('../../dao/utils/DBHelper');

UserModel.getAllUsers = function(callback) {
    return this.find().sort('updateAt').exec(callback);
}

UserModel.getUsersByPage = function(page, limit, callback) {
    dbHelper.pageQuery(page, limit, UserModel, '', {}, {
        date: 'desc'
    }, callback);
}

UserModel.getAllUsersCount = function(callback) {
    return this.count().exec(callback);
}

UserModel.getUsersCountCondition = function(condition, callback) {
    return this.count(condition).exec(callback);
}

UserModel.getUserById = function(id, callback) {
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
    return UserModel.remove({ _id: id }, callback);
}

module.exports = UserModel;
