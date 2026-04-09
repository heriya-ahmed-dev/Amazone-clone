import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const InnerHeader = () => {
  return (
    <div className='d-flex gap-3 list-unstyled bg-dark text-white'>
        <div className='d-flex '><MenuOutlinedIcon/>
          <li>All</li>
        </div>
         <li>Todays' Deals</li>
         <li>Customer Service</li>
         <li>Registery</li>
         <li>Gift Cards</li>
         <li>Sell</li>
    </div>
  )
}

export default InnerHeader