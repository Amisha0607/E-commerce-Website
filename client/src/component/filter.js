import React, { useState } from 'react'
import styel from './filter.css'
import {FilterProducts} from '../actions/productAction'
import {useDispatch , useSelector  } from 'react-redux'


const  FilterComp = () => {

    const [searchkey , setsearchkey] = useState('')

    const [sortkey , setsort] = useState('popular')

    const [category , setcategory ] = useState('all')
    const dispatch = useDispatch()

    return (
        <div>
           <br></br>

            <table  className='table' >
  <tr>
    <th>
        <input type='text' placeholder=' &nbsp; Search Product...'  style={{width:'95%' , height:'40px' }} 
        

        value={searchkey} 
        onChange={ (e)=>{ setsearchkey(e.target.value) } }
        
        
        ></input>
       
    </th>
    <th>

<select  value={sortkey} 
        onChange={ (e)=>{ setsort(e.target.value) } }
        
        style={{fontSize:'20px'}}
        >
    <option value="popular"  > By Price </option>
    <option value="htl" > High to Low </option>
    <option value="lth" > Low to High </option>
</select>

    </th>
    <th>

    <select  value={category} 
        onChange={ (e)=>{ setcategory(e.target.value) } }
        
        style={{fontSize:'20px'}}
        >
    <option value="all" >All </option>
    <option value="allopathy" >Allopathy</option>
    <option value="ayurvedic" > Ayurvedic</option>
    <option value="homeopathic" > Homeopathic</option>
   
    
</select>


    </th>
    <th style={{backgroundColor:'black'}} >
    <button onClick={ ()=>{ dispatch(FilterProducts(searchkey,sortkey,category)) } }
    
    style={{backgroundColor:'black' , padding:'10px' , borderRadius:'0px' }}
    
    > <i class="fa fa-search" aria-hidden="true"></i>
    </button>
    </th>
  </tr>

</table>

<br/>
        </div>
    )

    
}


export default  FilterComp;