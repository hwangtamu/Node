var express = require('express');
var router = express.Router();
var fs = require('fs');

function get_file(n){
    var obj = fs.readFileSync('data/python.json');
    var pythonData = JSON.parse(obj);
    return pythonData[n];
}

function get_code(n){
    a = fs.readFileSync('data/code/'+n+'.py', 'utf-8')
    console.log(a.length);
    return a
}
router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    res.render('article',
        { title : get_file(name).title, articleData: get_file(name), pythonData: get_code(name)})
});

module.exports = router;
