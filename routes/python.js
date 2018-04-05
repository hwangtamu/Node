var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var pythonData;

function find (name, query, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
}

router.get('/', function(req, res, next) {
    find('python', {}, function(err, docs){
       pythonData = docs[0];
       console.log(pythonData);
    });
    res.render('python',
    { title : 'Python', pythonData: pythonData})
});

module.exports = router;
