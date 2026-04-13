import React from 'react';
import './Product.css'
import Rating from '@mui/material/Rating';
const Product_list = ({info}) => {
  return (
    <div >  
    <div className='product_card'> 
      <img src={info.image} className='single_prod bg-white'/>
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
      </div>
    
    </div>
  )
}

export default Product_list