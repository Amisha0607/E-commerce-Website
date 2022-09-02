const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const Farmer = require('../models/farmermodel')




router.post('/register', (req,res)=>{


    Farmer.find({email:req.body.email} , (err,docs)=>{
        if(docs.length>0)
        {
            return  res.status(400).json({message:`User Already Present `})
        }
        else{
            const farmer = new Farmer(
                {
                    name : req.body.name ,
                    email : req.body.email ,
                    password : req.body.password ,
                    phoneno : req.body.phoneno ,
                    pancard : req.body.pancard
                }
            )
        
            farmer.save(err=>{
        
                if(!err)
                {
                    res.send({message :'Registration Successful' }  )
                }
                else{
                    res.send({message :'Something went wrong' } )
                }
        
        
        
        
            }
        
            )
        
        }
    } )

  


} )



//farmerlogin




router.post('/farmerlogin' , (req,res)=>{

    Farmer.find({email:req.body.email , password:req.body.password} , (err,docs)=>{

        if(docs.length>0)
        {
            
            const localsave = {
                name : docs[0].name ,
                _id: docs[0]._id ,
                email:docs[0].email
            }

            res.send(localsave)
        }
        else{
          return  res.status(400).json({message:'Invalid Credentials'})
        }

    } )

} )


module.exports = router