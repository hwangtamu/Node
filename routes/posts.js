var express = require('express');
var router = express.Router();
var fs = require('fs');
var postsData = JSON.parse(obj);

var obj = fs.readFileSync('data/python.json');

router.get('/', function(req, res, next) {
    res.render('posts',
        { title : 'Posts'})
});

module.exports = router;
