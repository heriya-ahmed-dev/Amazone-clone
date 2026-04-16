import React ,{useState , useEffect}from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './Product.css'


const Product_Detail = () => {
    const {productId} = useParams()
    const [oneProduct , setonePeoduct] = useState([]);
   
   useEffect(()=>{
    axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res)=>{
            setonePeoduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
   },[oneProduct])
    


  return (
    <div className='prod_container'>
      <div>
        <img src={oneProduct.image} alt=""  className='prod'/>
        <p className='ms-5'>{oneProduct.price}$</p>
        <button className='ms-5' >Add to cart</button><br/>
        </div>
        <div>
        <h2 className='text-primary'>{oneProduct.title}</h2>
        <p>{oneProduct.description}</p>
        </div>
        
    </div>
  
  ) 
}

export default Product_Detail