import React, { useState, useEffect } from 'react';

import Rating from 'react-rating';
import style from 'fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductByIdReducer } from '../reducers/productReducer';
import { getallproductsById } from '../actions/productAction'

import {AddToCart} from '../actions/cartaction'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import ReviewComponent from '../component/review'

import './cart.css'

const ProductScreenDescription = ({ match }) => {

    const prodid = match.params.id
    const dispatch = useDispatch()

    const [quantity , setquantity] = useState(1)

    const productbyidstate = useSelector(state => state.GetProductByIdReducer)

    const { products, loading, error } = productbyidstate



    const cartreducer = useSelector(state => state.CartReducer)


    const { CartItem } = cartreducer


    

    const currentuser = JSON.parse(localStorage.getItem('currentUser'))





    const addtocart=()=>{
        dispatch(AddToCart(products,quantity))

    }




    useEffect(() => {
        dispatch(getallproductsById(prodid))

    }, [])


    return (
        <div>






{
    currentuser ? ( <div> 


{

loading ? (<Loading/>) : error ? (<ErrorPage/>) : (


    <div>
        <br></br><br></br><br></br>
        <h1>This is Product Description</h1>






<div className='gridview' >




<div>
<img src={products.image} className="imagedescription"  ></img>
    </div>






<div>

     
<p className='name' > {products.name} </p>
       <br/>
        <h4> Description  : {products.description} </h4>
      



        <hr/>





        
      

       
<br/>

        <h2>Select Quantity</h2>

<br/>
        <select value={quantity} onChange={ (e)=>setquantity(e.target.value) } >

            {[...Array(products.countInStock).keys()].map((x, i) => {

                return <option value={i + 1}  >{i+1}</option>

            })}

        </select >

        <button onClick={addtocart} style={{backgroundColor:'black' , color:'white' , borderRadius:'12px' , padding:'3px' }}  >  Add to cart</button>



        <h3>  price /unit  {products.price} </h3>

<hr/>




        <ReviewComponent products={products} />




</div>
  










 </div>   









</div>


)



}










        
    </div> ) : (<p> PLease Login  </p> )
}





        



        </div>
    )
}

export default ProductScreenDescription;