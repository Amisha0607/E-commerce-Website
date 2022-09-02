import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserReducer } from '../reducers/userreducer'
import Loading from '../component/loader';
import Message from '../component/message'
import {UpdateUserAction} from '../actions/useraction'
import {UpdateUserReducer} from '../reducers/userreducer'
import './form.css'


const Profile = () => {
   

    const loginstate = useSelector((state) => state.LoginUserReducer)
    const updateuser = useSelector((state)=>state.UpdateUserReducer)

    const {loading , success , error} = updateuser

    const dispatch = useDispatch()

    const usernow = loginstate.currentUser

    const [name, setname] = useState(usernow.name)
    const [email, setemail] = useState(usernow.email)
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const update = (e) => {

        e.preventDefault()



        if (password === cpassword) {

            const updateuser = {
                name: name,
                email: email,
                password: password
            }

            dispatch(UpdateUserAction( updateuser , usernow._id  ))


        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            alert('Passwords Not Matched')
        }



    }




    return (
        <div   >

<br></br><br></br>

<div style={{border:'1px solid black' , margin:'25px' }}  className='bgmimgprofile' >

            <div style={{ textAlign: 'center' }} >
                <h2 style={{color:'white' , fontSize:'40px' }} > Update Your Profile Here </h2>

                {loading && (<Loading />)}
                {error && (<Message message='Email Already Registered' />)}

                {success && (<Message message='Succesfully Registered' />)}





                <form onSubmit={update} >
                   
                    <input type="text" value={name} required placeholder="Enter Name" onChange={(e) => { setname(e.target.value) }} id="fashionform" ></input>
                    <input type="text" value={email} required placeholder="Enter Email" onChange={(e) => { setemail(e.target.value) }} id="fashionform" ></input>
                    <input type="password" value={password} required placeholder="Enter New Password" onChange={(e) => { setpassword(e.target.value) }} id="fashionform" ></input>
                    <input type="password" value={cpassword} required placeholder=" Confrim New Password" onChange={(e) => { setcpassword(e.target.value) }} id="fashionform" ></input>



                    <br></br>
                    <button id="btn" type="submit"   > Update </button>
                    <p id='Message' ></p>

                    <br/>
                </form>

                </div>
            </div>



        </div>
    )
}


export default Profile;