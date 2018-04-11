var express = require('express');
var router = express.Router();
var Gists = require('gists');
var gists = new Gists({
    username: 'hwangtamu',
    password: 'wh07092053'
});
var url = "http://api.github.com/gists/public";
var gistData;
var get_gists = function (name, query, cb) {
    gists.allPublic({}, function(err, res){
        gistData = res.slice(0, 5).sort(function(a,b){
            console.log(gistData);
            return parseInt(Date.parse(a.modified_at)) - parseInt(Date.parse(b.modified_at));
        });
    });
};


/* GET home page. */
router.get('/', function (req, res) {
    get_gists();
    res.render('index',
        { title : 'Home', gistData: gistData }
    )
})

module.exports = router;
