import Header from "./Components/Header/Header";
import CarauselEffect from "./Components/Carousel/CarauselEffect";
import Catagory from "./Components/Catagory/Catagory.jsx";
import Product from "./Components/Products/Product.jsx";
import './App.css'


const App = () => {
  return (
    <div>
        <Header/>
        <CarauselEffect/>
        <Catagory/>
        <Product/>
          
    </div>
  )
}

export default App