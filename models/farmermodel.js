const mongoose = require('mongoose')

const FarmerSchema = mongoose.Schema({
    name :{
        type:String ,
        require
    } ,
    email:{
        type:String ,
        require
    } ,

   pancard:{
        type:Number ,
        require
    } ,
    phoneno:{
        type:Number ,
        require
    } ,
    password:{
        type:String ,
        require
    } 
})


const Farmer = mongoose.model('farmers' , FarmerSchema )
module.exports = Farmer