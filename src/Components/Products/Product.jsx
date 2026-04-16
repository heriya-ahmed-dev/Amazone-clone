import React,{useState,useEffect} from 'react'
import axios from 'axios';

import Product_list from './product_list';
import './Product.css'
const Product = () => {
   const [Products,setProducts] = useState([])

    axios
    .get('https://fakestoreapi.com/products')
    .then(res => {
        setProducts(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  return (
 

    <div className='prod_container'>
       {
       Products?.map((single_prod)=>{
            return( 
             <div key={single_prod.id} className=''>
                  <Product_list info={single_prod}/>
             </div>
            )
        })
       }



    </div>
  )
}

export default Product