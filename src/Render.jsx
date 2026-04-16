import React from 'react'
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Cart from './Components/Layouts/Cart.jsx';
import Orders from './Components/Layouts/Order.jsx';
import Layout from './Components/Layouts/Layout.jsx';
import CarauselEffect from "./Components/Carousel/CarauselEffect";
import Catagory from "./Components/Catagory/Catagory.jsx";
import Product from "./Components/Products/Product.jsx";
import Header from './Components/Header/Header.jsx';
import Product_Detail from './Components/Products/Product_Detail.jsx';


const Render = () => {

  return (
     <BrowserRouter>
       <Header/>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index
             element=
            {<div>
                 <CarauselEffect/>
                 <Catagory/>
                 <Product/>
            </div>}/>
           </Route>
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/list" element={<Orders/>}/>
            <Route path = "products/:productId" element = {<Product_Detail/>}></Route>
        </Routes>
     
     </BrowserRouter>

    
  )
}

export default Render