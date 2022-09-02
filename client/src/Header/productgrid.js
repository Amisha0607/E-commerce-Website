import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import style from './prod.css'
import {useDispatch ,  useSelector } from 'react-redux';


export default function ProductGrid({prod})
{

   





    return(
        <div   >





<div  className="iii"  >

<Link to={`product/${prod._id}`} style={{textDecoration:'none' , color:'black' }} >
             <div className="griditemm1" >

<br/>
<h4> {prod.name} </h4>

<img  src={prod.image} id="img" />

<p>  Price : {prod.price} /unit   </p>
<p>Quantity Available : {prod.countInStock} pieces  &nbsp; &nbsp;   </p>

<br/>
</div>

</Link>


</div>




 


        </div>
    )


}