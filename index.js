const express = require('express');
const app = express();

var router=require('./routes/index');


var port=3000;
/*
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogs");
*/

/*mongoose.Promise = Promise;*/

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var indexRouter = require('./routes/index');
app.set('view engine', 'ejs');
app.set(express.static('views'));
app.use(express.static('public'));

/*var nameSchema = new mongoose.Schema({
    topic: String,
    createdAt: {type: Date, default: Date.now},
    description:String,
    author:String
});
var Blog = mongoose.model("Blog", nameSchema);*/


app.use('/', indexRouter);








/*app.get('/readpost',function (req,res) {
    res.render('readpost',{Blog: Blog});
});

app.post('/readpost',function (req,res) {
    console.log(req.body);
    var newBlog =new Blog({
        topic : req.body.topic,
        description : req.body.description,
        author: req.body.author
    });
    newBlog.save(function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(data);

            res.redirect('/readpost');
        }
    });

});*/

app.listen(port, () => {
    console.log("Server listening on port " + port);
});





