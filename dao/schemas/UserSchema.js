'use strict';

var mongoose = require('mongoose');
var SEQModel = require('../models/SEQModel');

var UserSchema = new mongoose.Schema(
    {
        _id: Number,
        name: { type: String, required: true },
        passwd: { type: String, required: true },
        email: { type: String, required: true },
        articles: Number,
        articlesList: [Number],
        avatar: String,
        collections: Number,
        collectionsList: [],
        date: Number,
        desc: String,
        fans: Number,
        fansList: [Number],
        follow: Number,
        followList: [Number],
        lastLoginDate: Number,
        locked: Boolean,
        login: [{}],
        loginAttempts: Number,
        markList: [Number],
        messages: {
            article: [],
            collection: [],
            comment: [],
            fan: [],
            receive: []
        },
        readtimestamp: Number,
        receiveList: [],
        resetDate: Number,
        resetKey: String,
        role: Number,
        score: Number,
        sendList: [],
        sex: String,
        social: {},
        tagsList: [Number]
    },
    {
        collection: 'user'
    }
);

UserSchema.pre('save', function(next) {
    var doc = this;
    doc.date=new Date().getTime();
    SEQModel.getNextVal(function(error, IDSEQ) {
        if (error) {
            return next(error);
        }
        console.log(IDSEQ);
        doc._id = IDSEQ.curr_val;
        next();
    });
});

module.exports = UserSchema
