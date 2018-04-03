var express = require('express');
var router = express.Router();
var fs = require('fs');
var obj = fs.readFileSync('data/posts.json');
var postsData = JSON.parse(obj);


router.get('/', function(req, res, next) {
    res.render('posts',
        { title : 'Posts', postsData: postsData})
});

module.exports = router;
