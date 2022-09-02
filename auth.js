const mongoose = require('mongoose')

var mongodburl = 'mongodb+srv://shivika:shivika123@cluster0.yauqjan.mongodb.net/shivika'

mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed Medicom'  )
} )

mongoose.exports = mongoose

