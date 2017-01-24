'use strict';

var express = require('express');
var PostModel = require('../dao/models/PostModel');
var PostCache = require('memory-cache');

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
    var cacheKey="articles-"+page+"-"+limit;

    // Try get data from cache first!
    var articles=PostCache.get(cacheKey);
    if(articles){
        console.log("Hit cache: "+cacheKey);
        res.json(articles);
    }else{
        PostModel.getPostsByPage(page, limit, function(err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log("Get data from db:"+cacheKey);
            PostCache.put(cacheKey,result);
            res.json(result);
        });
    }
});

postRouter.get('/getPostById/:_id', function(req, res, next) {
    var id = parseInt(req.params._id);
    var cacheKey="post-"+id;
    var post=PostCache.get(cacheKey);
    // Try get data from cache first!
    if(post){
        console.log("Hit cache: "+cacheKey);
        res.json(post);
    }else{
        PostModel.getPostById(id, function(err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            PostCache.put(cacheKey,result);
            res.json(result);
        });
    }
});

postRouter.get('/getAllPostsCount', function(req, res, next) {
    var cacheKey="post-count";
    var count=PostCache.get(cacheKey);
    // Try get data from cache first!
    if(count){
        console.log("Hit cache: "+cacheKey);
        res.json(count);
    }else{
        PostModel.getAllPostsCount(function(err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            PostCache.put(cacheKey,result);
            res.json(result);
        });
    }
});

postRouter.post('/createPost', function(req, res, next) {
    console.log("CreatePost, PostCache cleared!");
    PostCache.clear();
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
    console.log("UpdatePost, PostCache cleared!");
    PostCache.clear();
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
    console.log("DeletePost, PostCache cleared!");
    PostCache.clear();
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
