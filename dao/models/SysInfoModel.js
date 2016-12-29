'use strict';

var mongoose = require('mongoose');
var SysInfoSchema = require('../../dao/schemas/SysInfoSchema');
var SysInfoModel = mongoose.model('sysinfo', SysInfoSchema);

SysInfoModel.getSysInfo = function(callback) {
    return this.find().exec(callback);
}

module.exports = SysInfoModel;
