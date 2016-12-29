'use strict';

var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../dao/models/UserModel');
var userRouter = express.Router();

// Query without conditions, too many results, very dangourse!
// userRouter.get('/getAllUsers', function(req, res, next) {
//     UserModel.getAllUsers(function(err, users) {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         res.json(users);
//     });
// });

userRouter.get('/getUsersByPage/:page/:limit', function(req, res, next) {
    var page = parseInt(req.params.page);
    var limit = parseInt(req.params.limit);
    UserModel.getUsersByPage(page, limit, function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(result);
    });
});

userRouter.get('/getAllUsersCount', function(req, res, next) {
    UserModel.getAllUsersCount(function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(result);
    });
});

userRouter.get('/getUserById/:_id', function(req, res, next) {
    var userId = req.params._id;
    UserModel.getUserById(userId, function(err, user) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

userRouter.post('/createUser', function(req, res, next) {
    var user = req.body;
    UserModel.createUser(user, function(err, user) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

userRouter.put('/updateUserInfo/:_id', function(req, res, next) {
    var id = req.params._id;
    var newInfo = req.body;
    UserModel.updateUserInfo(id, newInfo, {}, function(err, user) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

userRouter.delete('/deleteUserById/:_id', function(req, res, next) {
    var id = req.params._id;
    UserModel.deleteUserById(id, function(err, user) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

module.exports = userRouter;
