var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var pythonData;

function find (name, query, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
}

function get_file(n){
    return pythonData[n];
}

router.get('/:name', function(req, res, next) {
    find('python', {}, function(err, docs){
        pythonData = docs[0];
    });
    var n = req.params.name;
    res.render('article',
        { title : get_file(n).title, articleData: get_file(n)})
});

module.exports = router;
