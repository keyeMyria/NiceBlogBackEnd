var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../dao/models/UserModel');
var userRouter = express.Router();

// userRouter.get('/getAllUsers', function(req, res, next) {
//     UserModel.getAllUsers(function(err, users) {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         res.json(users);
//     });
// });

userRouter.get('/getUserByPage/:page/:limit', function(req, res, next) {
    var page=parseInt(req.params.page);
    var limit=parseInt(req.params.limit);
    UserModel.getUserByPage(page,limit,function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(result);
    });
});

userRouter.get('/findUserById/:_id', function(req, res, next) {
    var userId = req.params._id;
    UserModel.findUserById(userId, function(err, user) {
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

userRouter.get('/delUser', function(req, res, next) {
    res.send('删除用户，还没实现...');
});

module.exports = userRouter;
