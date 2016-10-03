var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/express-api');


var PostSchema = new Schema(
    {
        title:String
    }
)


module.exports = mongoose.model('Post',PostSchema);
