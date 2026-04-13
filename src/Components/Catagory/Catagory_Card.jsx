import React from 'react'
import './Catagory.css'
const Catagory_Card = ({data}) => {
  return (
    <div className='bg-white rounded-5'>
        <img src={data.Url} className='box'/>
        <h4 className='text-primary'>{data.Title} </h4>
        <p>{data.desc}</p>
        
        
    </div>
       
  )
}

export default Catagory_Card;