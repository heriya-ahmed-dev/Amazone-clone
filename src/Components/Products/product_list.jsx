import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
const Product_list = ({info}) => {
  
  return (
    <div >  
    <div className='product_card'> 
      <Link to ={`/products/${info.id}`} >
      <img src={info.image} className='single_prod bg-white'/>
      </Link>
      <div className='prod_title'>
        {info.title}
      </div>
      <div>
        <Rating
           name="size-medium" 
           defaultValue={2}
           value={info.rate}
           />
      </div>
       <p>{info.price}$</p>
        <button >Add to cart</button><br/>
      </div>
     
    
    </div>
  )
}

export default Product_list