const express = require('express')
const bodyparser= require('body-parser')
const app = express()
var productsroute = require('./routes/productroute')
var useroroute = require('./routes/useroute')
var orderroute = require('./routes/orderroute')
var famerroute = require('./routes/farmerrute')

app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')



app.get("/" , (req,res)=>{
    res.send("Welcome to Medico")
} )



app.use('/api/products/' , productsroute )

app.use('/api/users/' , useroroute )

app.use('/api/orders/' , orderroute )

app.use('/api/farmers/' , famerroute )




const port =  8089 ;

 app.listen( port , ()=>{
    console.log('Server started of Medico')
} )