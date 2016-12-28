var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    _id: Number,
    articles: Number,
    articlesList: [Number],
    avatar: String,
    collections: Number,
    collectionsList: [],
    date: Number,
    desc: String,
    email: String,
    fans: Number,
    fansList: [
        Number
    ],
    follow: Number,
    followList: [
        Number
    ],
    lastLoginDate: Number,
    locked: Boolean,
    login: [{}],
    loginAttempts: Number,
    markList: [
        Number
    ],
    messages: {
        article: [],
        collection: [],
        comment: [],
        fan: [],
        receive: []
    },
    name: String,
    passwd: String,
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
});

module.exports = UserSchema
