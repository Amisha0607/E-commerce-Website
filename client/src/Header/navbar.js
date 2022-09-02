import React from 'react';
import style from './navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { LogOutUser } from '../actions/useraction'
import FilterComp from '../component/filter'


const Navbar = () => {


    const cartreducer = useSelector(state => state.CartReducer)


    const { CartItem } = cartreducer


    const dispatch = useDispatch()

    const currentuser = JSON.parse(localStorage.getItem('currentUser'))



    return (
        <div>
{/* 
            <ul>
               
     

                {currentuser ?
                 (
                    <div>
                          <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Home</li>
                </a>
                       
                       


                       

                      


                        <a href ="/profile" >  <li> {currentuser.name}
                        </li> </a>



<a href ="/order" > <li>Orders</li> </a>




                <li  >
                    <a href="/cart" style={{ textDecoration: 'none', color: 'white' }} >
                        <i class="fas fa-shopping-cart"></i> {CartItem.length}
                    </a>

                </li>


                <a onClick={() => { dispatch(LogOutUser()) }}>
                            <li>LOGOUT</li>
                        </a>


                    </div>




                ) 
                
                :



                    (
                        <div className='loginreg' >
                            <a href="/login" >
                                <li style={{float:'left'}}  >Login </li>
                            </a>
                            <a href="/register" >
                                <li style={{float:'right'}}  >Register </li>
                            </a>
                        </div>
                    )}

        
        



            </ul> */}

{
    currentuser ? ( <p>


<nav class="navbar">
        <div class="navbar-container container">
           
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li style={{color:'black'}} ><a href="/profile" style={{color:'black'}} > {currentuser.name} </a></li>
               
                <li style={{color:'black'}} ><a href="/cart" style={{color:'black'}} >  <i class="fas fa-shopping-cart"></i> {CartItem.length}  </a></li>
               
                <li style={{color:'black'}} ><a href="/order" style={{color:'black'}} >Orders</a></li>
                <a onClick={() => { dispatch(LogOutUser()) }}  >
                            <li style={{color:'black'}} >Logout</li>
                        </a>
            </ul>
            <h1 class="logo">
            <br/>
            <a href="/" style={{textDecoration:'none' , fontSize:'35px' }} >


Medico
</a>
            </h1>
        </div>
    </nav>

    <br/><br/><br/>

    </p> ) : ( <p>



        <nav class="navbar">
        <div class="navbar-container container">
           
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li style={{color:'black'}} ><a href="/login" style={{color:'black'}} > Login </a></li>
               
               
               
                <li style={{color:'black'}} ><a href="/register" style={{color:'black'}} >Register</a></li>
                
            </ul>
            <h1 class="logo">
            <br/>
            <a href="/" style={{textDecoration:'none' , fontSize:'35px' }} >


Medico
</a>
            </h1>
        </div>
    </nav>

    <br/><br/><br/>


    </p> )
}


        </div>

    );

}

export default Navbar;