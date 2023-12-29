import React from "react";
// import { items } from "../Components/Data";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = ({items,cart, setCart}) => {
  const addTocart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("cart element:", cart )
    toast.success('🦄 Your item is added to cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                  <Link to={`/product/${product.id}`} 
                  style={{display:'flex', justifycontent:'center', alignItems:'center'}}>
                    <img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.description}
                      </p>
                     <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                     <button className="btn btn-warning" onClick={()=>addTocart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
