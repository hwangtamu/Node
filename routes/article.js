var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var fs = require('fs');

function find (name, query, cb) {

    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
}

function get_file(n){
    return pythonData[n];
}

var reg = /tutorial.+/;

router.get('/:name', function(req, res, next) {
    var n = req.params.name;
    if(n.match(reg)){
        console.log(n);
        res.render('tutorial', {
            articleData: 'data/static/'+n+'.html'
        })
    }else if(n.charCodeAt(0)<58){
        find('python', {}, function(err, docs){
            pythonData = docs[0];
            res.render('article',
                { title : get_file(n).title, articleData: get_file(n)})
        });
    }else{
        //console.log(n);
        var data = fs.readFileSync('data/article/'+n);
        res.contentType("application/pdf");
        res.send(data);
    }

});

module.exports = router;
