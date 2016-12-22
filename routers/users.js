var express = require('express');
var mongoose = require('mongoose'); //导入mongoose模块
var UserModel = require('../dao/models/UserModel'); //导入模型数据模块

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('什么都没干...');
});

//用户列表
router.get('/userList', function(req, res, next) {
    UserModel.fetch(function(err, users) {
        if (err) {
            console.log(err);
        }
        //直接返回全部用户列表
        res.json(users);
    })
});

//创建用户
router.get('/newUser', function(req, res, next) {
    var user = new UserModel({ name: '大漠穷秋', pwd: '03053311' });
    user.save();
    res.send("创建新用户成功...");
});

//删除用户
router.get('/delUser', function(req, res, next) {
    res.send('删除用户，还没实现...');
});

//查询用户资料
router.get('/getUserInfo', function(req, res, next) {
    res.send('获取用户资料，还没实现...');
});

module.exports = router;
