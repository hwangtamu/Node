var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pythonSchema = new Schema({
    title : String,
    content : String,
    id : String,
    tag : String,
    code : String
});

module.exports = mongoose.model('python', pythonSchema, 'python');
