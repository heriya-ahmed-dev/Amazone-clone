import React from 'react';
import { Cat_Info } from './Catagory.js';
import Catagory_Card from './Catagory_Card.jsx';
import'./Catagory.css'

const Catagory = () => {
  return (
    <div className='box_container'>
        {
            Cat_Info.map((Info)=>{
              return( 
                <div key={Info.id} className='box'>
                <Catagory_Card data= {Info}/>
                </div>
              )
            })
        }
    </div>
  )
}

export default Catagory;