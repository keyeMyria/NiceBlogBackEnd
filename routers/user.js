var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../dao/models/UserModel');

var router = express.Router();

router.get('/getAllUsers', function(req, res, next) {
    UserModel.fetch(function(err, users) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(users);
    })
});

router.get('/findUserById/:_id', function(req, res, next) {
    var userId = req.params._id;
    UserModel.findUserById(userId, function(err, user) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(user);
    })
});

router.post('/createUser', function(req, res, next) {
    var user=req.body;
    UserModel.createUser(user,function(err,user){
        if(err){
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

router.put('/updateUserInfo/:_id', function(req, res, next) {
    var id=req.params._id;
    var newInfo=req.body;
    UserModel.updateUserInfo(id,newInfo,{},function(err,user){
        if(err){
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

router.delete('/deleteUserById/:_id', function(req, res, next) {
    var id=req.params._id;
    UserModel.deleteUserById(id,function(err,user){
        if(err){
            console.log(err);
            throw err;
        }
        res.json(user);
    });
});

router.get('/delUser', function(req, res, next) {
    res.send('删除用户，还没实现...');
});

module.exports = router;
