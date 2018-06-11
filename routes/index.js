const express=require('express');
var router=express.Router();
var db= require('../models/index');
var post = db.Post;

router.get('/Writepost',function (req,res) {
    res.render('Writepost');
});

router.get('/ud',function (req,res) {
    res.render('ud');
});

router.get('/',function (req,res) {
    res.render('index');
});

router.get('/readpost',function (req,res) {
    post.find(function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.render('readpost', {newPost : data});
        }
    });



});

router.post('/readpost',function (req,res) {
    console.log(req.body);
    var newPost =new post({
        topic : req.body.topic,
        description : req.body.description,
        author: req.body.author
    });
    newPost.save(function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(data);

           res.redirect('/readpost');
        }
    });

});

router.get('/readpost/:id')


module.exports=router;