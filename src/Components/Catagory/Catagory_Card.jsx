import React from 'react';
import './Catagory.css';
import { Link } from 'react-router-dom';

const Catagory_Card = ({ data }) => {
  return (
    <div className='bg-white rounded-5 '>

      <img src={data.image} className='box card' alt="category" />


      <h2 className='text-primary'>{data.title}</h2>

      <h4>{data.desc}</h4>

    </div>
  );
};

export default Catagory_Card;