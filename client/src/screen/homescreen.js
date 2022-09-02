import React from 'react';
import style from './homescreen.css';
import axios from 'axios';
import {useEffect , useState} from 'react'
import {Link} from 'react-router-dom';
import Rating from 'react-rating'

import ProductGrid from '../Header/productgrid';
import {useDispatch ,  useSelector } from 'react-redux';
import {getallproductsreducer} from '../reducers/productReducer'
import {getallproducts } from '../actions/productAction'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'carousel-react-rcdev'
import { Carousel } from 'react-carousel-minimal';



const HomeScreen =()=>{

const getallproductstate = useSelector(state=>state.getallproductsreducer)
const {loading , products , error} = getallproductstate




    const data = [
       {
         image: "https://img.freepik.com/free-vector/discount-concept-illustration_114360-1852.jpg?w=2000",
         caption: "Discount on Referal"
       },
       {
         image: "https://img.freepik.com/premium-vector/medication-drugs-pills-pharmacy-drug-bottles-flat-illustration_102902-333.jpg?w=2000",
         caption: "Get Best Quality Medicines"
       },
       {
         image: "https://thumbs.dreamstime.com/b/courier-rides-scooter-express-delivery-motorcycle-service-vector-illustration-180980568.jpg",
         caption: "Delivery At Your Door Steps"
       },
       {
         image: "https://img.freepik.com/premium-vector/whey-protein-isolated-white-background-sports-nutrition-icon-container-package-fitness-protein-power-bodybuilding-sport-food-jar-bottle-with-supplements-muscle-growth-vector_342166-240.jpg",
         caption: "Whey Protein"
       },
       {
         image: "https://img.freepik.com/premium-vector/feminine-hygiene-woman-chooses-pad-menstrual-cup-zero-waste-eco-vector-concept_81894-5081.jpg?w=2000",
         caption: "Women Hygiene"
       }
    
     ];
   
     const captionStyle = {
       fontSize: '2em',
       fontWeight: 'bold',
     }
     const slideNumberStyle = {
       fontSize: '20px',
       fontWeight: 'bold',
     }


const dispatch = useDispatch()

useEffect( ()=>{


    dispatch(getallproducts())
}  ,[])



window.onload = function(){

    const reviews = [
        {
          id: 1,
          name: "Sivika Sharm",
          job: "Intern",
          img:
            "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80",
          text:
            " I made this as a part of my inhouse internsip under Prof. Shruti Jaiswal"
        },
        {
          id: 2,
          name: "Apoorva",
          job: "Heart Patient",
          img:
            "https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/ok26lkxxcptihvwljzaw/girl-in-red?fimg-ssr-default",
          text:
            "This is an amazing Website , I've been using this for a long time now . It has saved my life "
        },
        {
          id: 3,
          name: "Anushka",
          job: "Diabetic",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjy__2mykLSMfBp-AdOSMoneYZ2FHpNaaMQ&usqp=CAU",
          text:
            "Glad that this site exists . I get great deals  "
        },
    
      ];
      
      const img = document.getElementById("person-img");
      const author = document.getElementById("author");
      const job = document.getElementById("job");
      const info = document.getElementById("info");
      
      const prevBtn = document.querySelector(".prev-btn");
      const nextBtn = document.querySelector(".next-btn");
      
      let currentItem = 0;
      
      // load initial item
      window.addEventListener("DOMContentLoaded", () => {
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
      });
      
      // show person based on item
      function showPerson(person) {
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
      }
      
      // show next person
      nextBtn.addEventListener("click", () => {
        currentItem++;
        if (currentItem > reviews.length - 1) {
          currentItem = 0;
        }
        showPerson(currentItem);
      });
      
      // show prev person
      prevBtn.addEventListener("click", () => {
        currentItem--;
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
      });

}


  


    return(
        <div>



<br/><br/>
<Carousel
            data={data}
            time={2500}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
           
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}

         
          />


      




<h2 style={{marginTop:'12%'}} >Recommended Items</h2>


<div className="gridcontain1" >






    {loading ? <h1> <Loading/> </h1> :error ? <ErrorPage/> : 
    (
        products.slice(0,4).map(prod=>{
            return <div className="container" >
                <ProductGrid prod={prod} />
                </div>
        })
    ) }

 

</div>

<br/><br/>
<div>
    <a href='/allproducts' style={{textDecoration:'none'}} >
<span id="see-more" >
    See More
</span>
</a>
</div>

<br/><br/><br/>

<main class="main">
  <section class="container1">

    <div class="title">
      <h2>reviews</h2>
      <div class="underline"></div>
    </div>

    <article class="review">
      <div class="img-container">
        <img src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80" alt="" id="person-img" />
      </div>

      <h4 id="author">Shivika Sharma</h4>
      <p id="job">Intern</p>
      <p id="info">
       I made this as a part of my inhouse internsip under Prof. Shruti Jaiswal
      </p>


      <div class="button-container">
        <button class="prev-btn btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

    </article>

  </section>
</main>



<div id="problem" >
<br/>
<p style={{fontSize:'39px'}} >Have Problem in finding medicine ?</p>

<br/><br/>
<p style={{fontSize:'22px'}} >Contact to your medical specalist for concern</p>

<br/>
<p style={{fontSize:'17px'}}>  <i class="fa fa-phone" aria-hidden="true"></i> +91-9599150262 </p>


</div>

<br/><br/>

<div id="problem1" >
<br/>

<p style={{fontSize:'22px'}} >Inhouse Intership Submitted to Prof.Shruti Jaiswal <i class="fas fa-chalkboard-teacher"></i> </p>

<br/>
<p style={{fontSize:'17px'}}>   Sivika Sharma - 9919103171 </p>

<br/><br/>
</div>

      
{/* 

<FilterComp/>


<div className="gridcontain1" >






    {loading ? <h1> <Loading/> </h1> :error ? <ErrorPage/> : 
    (
        products.map(prod=>{
            return <div className="container1" >
                <ProductGrid prod={prod} />
                </div>
        })
    ) }

 

</div> */}



    </div>

    );
  
}

export default HomeScreen;