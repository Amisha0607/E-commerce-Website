import React , {useState}  from 'react'
import {useDispatch , useSelector} from 'react-redux'

import {RegisterUserReducer} from '../reducers/farmerreducer'
import {RegisterNewUser} from '../actions/farmeraction'
import Loading from '../component/loader';
import Message from '../component/message'

const  FarmerRegister = () => {

  const registreducer = useSelector(state=>state.RegisterUserReducer)


  const {loading , error , success } = registreducer
  
  
      const [name , setname] = useState('')
      const [email , setemail] = useState('')
      const [password , setpassword] = useState('')
      const [cpassword , setcpassword ] = useState('')
      const [pancard , setpancard] = useState()
      const [phoneno,setphoneno] = useState()

  
      const dispatch = useDispatch()
  
      const register=(e)=>{
  
          e.preventDefault()
  
          const user ={
              name : name , 
              email:email ,
              password:password ,
              pancard : phoneno ,
              phoneno : phoneno
          }
  
  
          if(password===cpassword)
          {
             dispatch(RegisterNewUser(user))
          }
          else{
  document.getElementById('Message').innerHTML = 'Passwords Not Matched'
   alert('Passwords Not Matched')
          }
      
    
      
      }
  


    return (
        <div>


{ loading && (<Loading/>) }
<div  >
    














<div  >

<br/><br/><br/>
<h1> Register For Farmers </h1>



<form onSubmit={register} >

<input type="text" value={name} required  placeholder="Enter Name" onChange={ (e)=>{ setname(e.target.value) } }    ></input>
<input type="text" value={email} required placeholder="Enter Email" onChange={ (e)=>{ setemail(e.target.value) } }   ></input>



<input  type="number" value={phoneno} required placeholder="Enter Mobile Number" onChange={ (e)=>{ setphoneno(e.target.value)  }  } />


<input type="password" value={password} required placeholder="Enter Password" onChange={ (e)=>{ setpassword(e.target.value) } }    ></input>


<input type="password" value={cpassword} required placeholder="Enter Confrim Password" onChange={ (e)=>{ setcpassword(e.target.value) } }    ></input>

<br></br>
{error && (<Message message='Email Already Registered' />) }

{success && ( <Message message='Succesfully Registered'  /> ) }
<button id="btn"  type="submit"   > Register </button>
<p id='Message' ></p>
</form>

<a href="/login" > Click here to login </a>


</div>
   







</div>







         
         
        </div>
    )
}


export default  FarmerRegister;