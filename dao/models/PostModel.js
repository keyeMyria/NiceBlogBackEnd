'use strict';

var mongoose = require('mongoose');
var PostSchema = require('../../dao/schemas/PostSchema');
var PostModel = mongoose.model('article', PostSchema);
var dbHelper = require('../../dao/utils/DBHelper');

PostModel.getAllPosts = function(callback) {
    return this.find().exec(callback);
}

PostModel.getPostsByPage = function(page, limit, callback) {
    dbHelper.pageQuery(page, limit, PostModel, '', {}, {
        date: 'desc'
    }, callback);
}

PostModel.getPostById = function(id, callback) {
    return this.findOne({ _id: id }).exec(callback);
}

PostModel.getAllPostsCount = function(callback) {
    return this.count().exec(callback);
}

PostModel.createPost = function(post, callback) {
    return PostModel.create(post, callback);
}

PostModel.updatePost = function(id, newPost, options, callback) {
    var query = { _id: id };
    return PostModel.findOneAndUpdate(query, newPost, options, callback);
}

PostModel.deletePostById = function(id, callback) {
    return PostModel.remove({ _id: id }, callback);
}

module.exports = PostModel;
