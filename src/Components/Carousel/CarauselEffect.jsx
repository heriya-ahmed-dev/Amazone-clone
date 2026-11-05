import React from 'react';
import { images } from './Carousel';
import './Carousel.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarauselEffect = () => {
  return (
    <div>
       <Carousel
        infiniteLoop ={true}
        autoPalay = {true}
        showIndicator = {true}
        >
       {images.map((items)=>{
        return(
          <div key={items.id}>
              <img src={items.url}/>

          </div>
        )
       })}
       </Carousel>
    </div>
  )
}

export default CarauselEffect