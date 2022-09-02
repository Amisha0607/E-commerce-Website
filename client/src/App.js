
import './App.css';
import Navbar from './Header/navbar';
import HomeScreen from './screen/homescreen'
import { BrowserRouter , Route } from "react-router-dom";
import  ProductScreenDescription  from './screen/description' ;
import ProductGrid from './Header/productgrid'
import axios from 'axios';
import CartScreen from './screen/cartscreen';
import Register from './screen/registration'
import Login from './screen/login'
import { useState } from 'react';
import OrderScreen from './screen/orderscreen'
import OrderInfo from './screen/OrderInfo'
import Profile from './screen/profilecreen'
import AdminScreen from './screen/adminscreen'
import FarmerRegister from './screen/farmerregister'
import FarmerLogin from './screen/farmerlogin'
import LandingPage from './screen/landingpage'
import AllProducts from './screen/allproducts';

function App() {
  const currentuser = JSON.parse(localStorage.getItem('currentUser'))

  return (
    <div className="App">

      
   {/* <HomeScreen/> */}
   <Navbar/>
   <BrowserRouter>
   {/* <Route exact path="/landing" component={LandingPage} ></Route> */}
   <Route exact path="/" component={HomeScreen} ></Route>
   <Route path="/product/:id" component={ProductScreenDescription}  ></Route>
    <Route  path="/cart"  component={CartScreen}  />
    <Route path="/register" component={Register}  ></Route>
    <Route path="/login" component={Login} ></Route>
    <Route  path="/farmerlogin" component={FarmerLogin}  />
    <Route path="/farmerregister" component={FarmerRegister} />
    <Route path="/allproducts" component={AllProducts} />
 {  currentuser ? <Route path="/order" component={OrderScreen} ></Route> : ( null ) }
 {  currentuser ? <Route path="/orderinfo/:orderid" component={OrderInfo} ></Route> : ( <h3> </h3> ) }
 <Route path='/profile' component={Profile} ></Route>
 <Route path="/admin" component={AdminScreen}  ></Route>

   </BrowserRouter>
    </div>
  );
}

export default App;
