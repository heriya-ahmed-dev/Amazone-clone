import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {images} from './Carousel.js';
import './Carousel.css'

const CarauselEffect = () => {
  return (
    <div>
        <Carousel
          autoPlay ={true}
          infiniteLoop = {true} 
          showIndicators = {false}
          showThumbs={false}
          interval={2000}      
          transitionTime={500}
        >
          {
           images.map((img,id) =>{
           return(
             <div key={id} className='Carousel_img'>
               <img src={img.url} alt="images" className=''/>
            </div>
            ) 
           })
          }




        </Carousel>
    </div>
  )
}

export default CarauselEffect