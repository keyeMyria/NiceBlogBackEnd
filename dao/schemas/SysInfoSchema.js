var mongoose = require('mongoose');

var SysInfoSchema = new mongoose.Schema({
    articleCache: Number,
    ArticleHots: [Number],
    articles: Number,
    ArticleStatus: [Number],
    ArticleTagsMax: Number,
    beian: String,
    cloudDomian: String,
    collectionCache: Number,
    commentCache: Number,
    comments: Number,
    CommentUp: Number,
    ContentMaxLen: Number,
    ContentMinLen: Number,
    date: Number,
    description: String,
    domain: String,
    email: String,
    emailVerification: Boolean,
    info: {
        author: {
            name: String,
            email: String,
            url: String
        },
        name: String,
        version: String,
        cdnHost: String,
        description: String,
        keywords: [String],
        homepage: String,
        main: String,
        repository: {
            repotype: String,
            url: String
        },
        engines: {
            node: String
        },
        dependencies: {
            rrestjs: String,
            mongoskin: String,
            redis: String,
            marked: String,
            nodemailer: String,
            thenjs: String,
            xss: String
        },
        devDependencies: {},
        scripts: {
            start: String
        },
        nodejs: String,
        rrestjs: String
    },
    keywords: String,
    listCache: Number,
    logo: String,
    maxOnlineNum: Number,
    maxOnlineTime: Number,
    messageCache: Number,
    metadesc: String,
    metatitle: String,
    onlineNum: Number,
    onlineUsers: Number,
    paginationCache: Number,
    RecommendUp: Number,
    register: Boolean,
    robots: String,
    smtp: {
        host: String,
        secureConnection: Boolean,
        port: Number,
        auth: {
            user: String,
            pass: String
        },
        senderName: String,
        senderEmail: String
    },
    SummaryMaxLen: Number,
    tagCache: Number,
    TimeInterval: Number,
    title: String,
    TitleMaxLen: Number,
    TitleMinLen: Number,
    upload: Boolean,
    upyun: {
        url: String,
        bucket: String,
        user: String,
        passwd: String,
        form_api_secret: String
    },
    url: String,
    userCache: Number,
    UserNameMaxLen: Number,
    UserNameMinLen: Number,
    users: Number,
    UsersScore: [
        Number
    ],
    UserTagsMax: Number,
    visitors: Number
});

module.exports = SysInfoSchema
