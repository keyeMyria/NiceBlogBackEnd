var express = require('express');
var SysInfoModel = require('../dao/models/SysInfoModel');
var sysInfoRouter = express.Router();

sysInfoRouter.get('/getSysInfo', function(req, res, next) {
    SysInfoModel.getSysInfo(function(err, sysInfo) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(sysInfo);
    });
});

module.exports = sysInfoRouter;
