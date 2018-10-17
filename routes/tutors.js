var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

function find (name, query, cb) {

    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
}

router.get('/', function(req, res, next) {
    find('tutors',{}, function(err, docs){
        postsData = docs[0];
        console.log(postsData);
        res.render('posts',
            { title : 'Posts', postsData: postsData})
    });

});

module.exports = router;
