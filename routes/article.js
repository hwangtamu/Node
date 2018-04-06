var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

function find (name, query, cb) {

    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
}

function get_file(n){
    return pythonData[n];
}

router.get('/:name', function(req, res, next) {
    var n = req.params.name;
    if(n[0]!='p'){
        find('python', {}, function(err, docs){
            pythonData = docs[0];
            res.render('article',
                { title : get_file(n).title, articleData: get_file(n)})
        });
    }else{
        var fs = require('fs');
        var obj = fs.readFileSync('data/posts.json');
        var metaData = JSON.parse(obj)[n.slice(1,n.length)];
        var articleData = fs.readFileSync('data/static/'+metaData.id, 'utf-8').toString().split("\n");
        console.log(articleData);

        res.render('post',
            {title : metaData.title, metaData : metaData, articleData : articleData})
    }

});

module.exports = router;
