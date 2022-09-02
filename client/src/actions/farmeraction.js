import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";
import Message from '../component/message'

import Loading from '../component/loader';




export const RegisterNewUser=(user)=>dispatch=>{

 

dispatch({type:'User_Register_Request'})

// const {email , password} =user


axios.post('/api/farmers/register',user).then( (res)=>{
    dispatch({type:'User_Register_Success'})

     console.log(res.data.message);











    

} ).catch(err=>{
    dispatch({type:'User_Register_Failed', payload:err });
 
    console.log(err)
})





}






export const LoginUser=(user)=>dispatch=>{


    
    dispatch({type:'User_Login_Request'})
    
    axios.post('/api/farmers/farmerlogin',user).then( res=>{
        dispatch({type:'User_Login_Success'})
    localStorage.setItem('currentUser' , JSON.stringify(res.data) )
   window.location.href='/'
    
    } ).catch(err=>{
        dispatch({type:'User_Login_Failed' , payload:err } )
        
    })
    
    
    }




export const LogOutUser=()=>dispatch=>{


    localStorage.removeItem('currentUser' )
    
    dispatch({type:'User_LogOut'})
    window.location.href='/farmerlogin'
  
    
    }

