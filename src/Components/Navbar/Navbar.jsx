import React, { useState } from 'react';
import "./Navbar.css";
import { MdShoppingCart } from 'react-icons/md';
// import { MdShoppingCart } from "react-icons/md";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from '../Data';

export const Navbar = ({setData,cart}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const[searchTerm, setsearchTerm]=useState("")

  const filterbyCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterbyPrice = (price)=>{
    const element = items.filter((product)=>product.price >= price)
    // console.log(element)
    setData(element)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/searchpage/${searchTerm}`);
    setsearchTerm("")
  }
  return (
    <>
        <header className='sticky-top'>
            <div className='nav-bar'> 
            <Link to={'/'} className='brand text-decoration-none'>E-commerce</Link>

            <form className='search-bar' 
            onSubmit={handleSubmit}>
                <input type='text' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} placeholder='Search Products'/>
            </form>

            <Link to={'/cartpage'} className='cart text-decoration-none'><button type="button" className="btn btn-dark position-relative">
  <MdShoppingCart style={{color:'#cccc00', fontSize :'2rem'}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{color:'#cccc00'}}>
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
            </div>
            {
              location.pathname == '/' &&  (<div className='navbar-wrapper'>
            <div className='items'>Filter by{"->"}</div>
            <div className='items' onClick={()=>setData(items)}>No Filter</div>
            <div className='items' onClick={()=>filterbyCategory('mobiles')}>Mobiles</div>
            <div className='items' onClick={()=>filterbyCategory('laptops')}>Laptops</div>
            <div className='items' onClick={()=>filterbyCategory('Tablets')}>Tablets</div>
            <div className='items' onClick={()=>filterbyPrice(29999)}>{">="}29999</div>
            <div className='items' onClick={()=>filterbyPrice(49999)}>{">="}49999</div>
            <div className='items' onClick={()=>filterbyPrice(69999)}>{">="}69999</div>
            <div className='items' onClick={()=>filterbyPrice(89999)}>{">="}89999</div>
            </div>)
            }

            
        </header>
    </>
  )
}
