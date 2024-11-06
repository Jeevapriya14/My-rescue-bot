const express=require('express')
const collection=require('./mongo')
const cors=require('cors')


var ejs=require('ejs')
const app=express();
app.use(express.json)
app.use(express.urlencoded({encoded:true}))
app.use(cors())
app.listen(8000);
app.get('/',function(req,res){
    res.send("Hello");

});
