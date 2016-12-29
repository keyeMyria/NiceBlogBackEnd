'use strict';

var express = require('express');
var PostModel = require('../dao/models/PostModel');
var postRouter = express.Router();

// Query without conditions, too many results, very dangourse!
// postRouter.get('/', function(req, res, next) {
//     PostModel.getAllPosts(function(err, result) {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         res.json(result);
//     });
// });

postRouter.get('/getPostsByPage/:page/:limit', function(req, res, next) {
    var page = parseInt(req.params.page);
    var limit = parseInt(req.params.limit);
    PostModel.getPostsByPage(page, limit, function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(result);
    });
});

postRouter.get('/getPostById/:_id', function(req, res, next) {
    var id = parseInt(req.params._id);
    PostModel.getPostById(id, function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(result);
    });
});

postRouter.get('/getAllPostsCount', function(req, res, next) {
    PostModel.getAllPostsCount(function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(result);
    });
});

postRouter.post('/createPost', function(req, res, next) {
    var post = req.body;
    PostModel.createPost(post, function(err, post) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(post);
    });
});

postRouter.put('/updatePost/:_id', function(req, res, next) {
    var id = req.params._id;
    var newPost = req.body;
    PostModel.updatePost(id, newPost, {}, function(err, post) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(post);
    });
});

postRouter.delete('/deletePostById/:_id', function(req, res, next) {
    var id = req.params._id;
    PostModel.deletePostById(id, function(err, post) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(post);
    });
});

module.exports = postRouter;
