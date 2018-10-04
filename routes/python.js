var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();


var find = function (name, query, cb) {
    console.log(mongoose.connection.readyState);
    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
};


router.get('/:name', function(req, res) {
    find('python', {}, function(err, pythonData){
        res.render('python',
            { title : 'Python', pythonData: pythonData[0]})
    });

});

module.exports = router;
