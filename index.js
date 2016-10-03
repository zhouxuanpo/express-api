var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-api');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var userSchema = mongoose.Schema({
      user: String,
      password: String,
      age: String
    });
    var User = mongoose.model('user', userSchema);
    // var silence = new User({
    //     user: 'Silence' ,
    //     password: '123',
    //     age: '18'
    // });
    // silence.save();
    // console.log(silence.user,silence.password,silence.age); // 'Silence'


    User.findById({_id: '57ecc4c3f247120f4b60b9e5'}, function(err, user) {
    //   user.name = 'rrrrrr11111111';
      user.remove(function(err){
        console.log('删除了！')
        User.find().exec(function(err, users) {
          // 异步执行
          console.log(users);
        });
      });
    });

    console.log("我先出来了");
});
