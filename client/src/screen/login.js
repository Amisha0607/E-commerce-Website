import { wind } from 'fontawesome';
import React , {useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {LoginUser} from '../actions/useraction'
import style from './form.css'

import Loading from '../component/loader'
import ErrorPage from '../component/error'

const Login=()=>{

    const loginreducer = useSelector(state=>state.LoginUserReducer)

    const {loading , error} = loginreducer

    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    

    const dispatch = useDispatch()

    const login=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


      dispatch(LoginUser(user))
      document.getElementById('Message').innerHTML=error
    }


    useEffect( ()=>{

        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }


    } ,[])



    return(
        <div>



<br/><br/><br/><br/><br/><br/>
<div  >









<div id="boxshad"  >

<h1  > Login </h1>
   
<form onSubmit={login}   >


<input type="text" value={email} required placeholder="Enter User ID" onChange={ (e)=>{ setemail(e.target.value) } }   
id="fashionform" ></input>

<input type="password" value={password} required placeholder="Enter Password" onChange={ (e)=>{ setpassword(e.target.value) } }   id="fashionform" ></input>


<br></br>
<button id="btn"  type="submit"   > Login </button>


{loading && <Loading/>}
<p id='Message' ></p>
</form>
<a href="/register" > Click here to register </a>
<br/>   <br/>
</div>
   <br/>





</div>




        </div>
    )



}

export default Login;