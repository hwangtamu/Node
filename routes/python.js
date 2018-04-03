var express = require('express');
var fs = require('fs');

var router = express.Router();
var obj = fs.readFileSync('data/python.json');
var pythonData = JSON.parse(obj);

router.get('/', function(req, res, next) {

    res.render('python',
    { title : 'Python', pythonData: pythonData})
});

module.exports = router;
