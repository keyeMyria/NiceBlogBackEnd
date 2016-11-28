var express = require('express');
var mongoose = require('mongoose'); //导入mongoose模块
var UserModel = require('../models/UserModel'); //导入模型数据模块

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('获取用户列表');
});

router.get('/userlist', function(req, res, next) {
    UserModel.fetch(function(err, users) {
        if (err) {
            console.log(err);
        }
        //这里也可以json的格式直接返回数据res.json({data: users});
        res.render('users', { title: '用户列表', users: users })
    })
})

module.exports = router;
