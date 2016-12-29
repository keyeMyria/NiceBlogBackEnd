'use strict';

var mongoose = require('mongoose');
var SEQModel = require('../models/SEQModel');

var PostSchema = new mongoose.Schema({
    _id: Number,
    author: Number,
    comment: Boolean,
    comments: Number,
    commentsList: [Number],
    content: String,
    cover: String,
    date: Number,
    display: Number,
    favorsList: [Number],
    hots: Number,
    markList: [Number],
    opposesList: [Number],
    refer: String,
    status: Number,
    tagsList: [Number],
    title: String,
    updateTime: Number,
    visitors: Number
});

PostSchema.pre('save', function(next) {
    var doc = this;
    doc.date = new Date().getTime();
    SEQModel.getNextVal(function(error, IDSEQ) {
        if (error) {
            return next(error);
        }
        doc._id = IDSEQ.curr_val;
        next();
    });
});

module.exports = PostSchema;
