var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


var Post = require('./models/post')

// 接收(响应)请求,而不是发出请求,浏览器(客户端)发出请求.
// 读取所有文章
app.get('/',function(req,res){
  var page ="<form method='post' action='/posts2'>"+
            "<input type='text' name='title'/>"+
            "<input type='submit'>"+
            "</form>"
  res.send(page)
  console.log("GET/posts2")
})

//发布一篇文章
app.post('/posts2/',function(req,res){
  //请注意:send 只能send一次.执行上面的这条

  // res.send('The Blog title is'+': ' + req.body.title)
  var post = new Post({title:req.body.title});
  post.save(function(){
      console.log("saved!");
  });
})


app.listen(3000,function(){
  console.log('running on port 3000...')
})
