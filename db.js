const mongoose = require("mongoose");

var  mongoURL = 'mongodb+srv://hammadahmad196:arooba12@cluster0.btivx.mongodb.net/mern-pizza';

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true })

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongodb connection ok');
})

db.on('error', ()=>{
    console.log('Mongodb connection failed');
})

module.exports = mongoose