import React from 'react'
import { Link , Switch , Route } from 'react-router-dom';
import ProductList from './productlist'
import AddNewProduct from './newproduct'
import OrderList from './orderlist'
import UserList from './userlist'
import EditProduct from './editproduct'
import FarmerNavBar from '../Header/farmernavbar'
import './admin.css'
const  AdminScreen = () => {

    const currentuser = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <div>
{
    currentuser?(
        <p>
<br/> <br/> <br/>

<h1> This Section is Only for Admin </h1>

<div   >

    <div >
       <br/>

       <div className='grid' >

     


          <p>
          {/* <ul className='makebig'  >
        <li ><Link to='/admin/userlist'   className='stylebar'   > User List</Link>  </li>
        <li ><Link to='/admin/productlist'   className='stylebar' >Product List </Link>   </li>
        <li ><Link to='/admin/addnewproduct'  className='stylebar'>Add New Product</Link>   </li>
        <li ><Link to='/admin/orderlist'  className='stylebar'>Order List</Link>    </li>


    </ul> */}

    <div className="grid2" >
               
<p id='boxbar' ><Link to='/admin/userlist'  style={{textDecoration:'none' , color:'white' }}  > User List</Link></p>
<p id='boxbar' ><Link to='/admin/productlist'  style={{textDecoration:'none' , color:'white' }}  >Product List </Link> </p>
<p id='boxbar'><Link to='/admin/addnewproduct'  style={{textDecoration:'none' , color:'white' }}  >Add New Product</Link> </p>
<p id='boxbar'><Link to='/admin/orderlist'  style={{textDecoration:'none' , color:'white' }} >Order List</Link> </p>

                </div>

          </p>


    </div>
    
    <br/><br/>

    <Switch>

        <Route path="/admin/userlist" component={UserList}  ></Route>
        <Route path="/admin/productlist" component={ProductList} ></Route>
        <Route path="/admin/addnewproduct" component={AddNewProduct} ></Route>
        <Route path="/admin/orderlist" component={OrderList} ></Route>
        <Route path="/admin/editproduct/:product" component={EditProduct} ></Route>
        

    </Switch>

    </div>

   
    
  
    
</div>
        </p>
    ):(
        <p>
            Please Login
        </p>
    )
}
            
        </div>
    )
}


export default  AdminScreen;