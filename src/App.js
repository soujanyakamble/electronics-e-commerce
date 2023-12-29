
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Pages/Product';
import Detail from './Components/Detail';
import Searchitem from './Components/Searchitem';
import Carts from './Components/Carts';
import { items } from './Components/Data';
import { useState } from 'react';

function App() {
  const [data, setData]=useState([...items])
  const [cart, setCart]=useState([])
  return (
    
    <>
    <BrowserRouter>
       <Navbar cart={cart} setData={setData}/>
       <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/searchpage/:term" element={<Searchitem/>}/>
        <Route path="/cartpage" element={<Carts cart={cart} setCart={setCart}/>}/>
       </Routes>
      </BrowserRouter>
    </>
     
    
  );
}

export default App;
