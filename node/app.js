const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/users').then(()=>{
    console.log(mongoose);
})


app.get("/",(req,res)=>{
    res.send("it is working");
});
app.listen(3000);