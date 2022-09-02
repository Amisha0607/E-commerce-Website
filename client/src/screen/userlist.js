import React from 'react'
import {useEffect , useState} from 'react';

import {useDispatch , useSelector} from 'react-redux';
import {GetAllUserAction , DeleteUserAction} from '../actions/useraction';
import {GetAllUserReducer} from '../reducers/userreducer';
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'
import { user } from 'fontawesome';
import './admin.css'

const  UserList = () => {

    const getallusers = useSelector(state=> state.GetAllUserReducer )

    const {users , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllUserAction())
    } , [] )



  



    return (
        <div>
           <h3> User List  </h3>

           <table style={{width:'90%'}} id="customers" >
               <thead>
                   <tr>
                   <th>User Id</th>
                   <th>Name</th>
                   <th>Email</th>
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loading/>) }
                   {error && ( <ErrorPage/> ) }
                   {users && ( users.map(use=>{
                       return <tr>

                           <td> {use._id} </td>
                           <td> {use.name} </td>
                           <td> {use.email} </td>
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>



        </div>
    )
}


export default  UserList;