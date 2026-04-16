import React, { useEffect, useState } from 'react';
import Catagory_Card from './Catagory_Card';
import { Cat_Info } from './Catagory';
import './Catagory.css';
import axios from 'axios';

const Catagory = () => {
  

  return (
    <div className='box_container'>
      {Cat_Info.map((item) => (
        <div key={item.id} className='box'>
          <Catagory_Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default Catagory;