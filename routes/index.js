var express = require('express');
var router = express.Router();
var Gists = require('gists');
var gists = new Gists({
    username: 'hwangtamu',
    password: 'wh07092053'
});
var gistData;
var url = "http://api.github.com/gists/public";

var get_gists = function (cb) {
    gists.allPublic({}, function(err, res){
        gistData = res.slice(0, 5).sort(function(a,b){
            return parseInt(Date.parse(a.modified_at)) - parseInt(Date.parse(b.modified_at));
        });
        cb(gistData);
    });
};


/* GET home page. */
router.get('/', function (req, res) {
    // get_gists();
    // res.render('index',
    //     { title : 'Home', gistData: gistData }
    // )
    get_gists(function(gistData){
        res.render('index',
            { title : 'Home', gistData: gistData})
    });

})

module.exports = router;
