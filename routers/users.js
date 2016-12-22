var express = require('express');
var mongoose = require('mongoose'); //导入mongoose模块
var UserModel = require('../dao/models/UserModel'); //导入模型数据模块

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('获取用户列表');
});

router.get('/userlist', function(req, res, next) {
    UserModel.fetch(function(err, users) {
        if (err) {
            console.log(err);
        }
        //直接返回用户数组
        res.json(users);
    })
});

router.get('/newuser', function(req, res, next) {
    var user = new UserModel({ name: '大漠穷秋', pwd: '03053311' });
    user.save();
    res.send("创建新用户...");
});

module.exports = router;
