import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { Product } from "../Pages/Product";

const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProduct]=useState([])

  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id);
    // console.log(filterproduct)
    setProduct(filterproduct[0]);
    const relatedProducts = items.filter((p)=>p.category === product.category)
    // console.log("relatedproduct=",relatedProducts )
    setRelatedProduct(relatedProducts)
  }, [id, product.category]);
  return (
    <>
      <div className="container detailbox">
        <div className="imgdiv m-4">
          <img src={product.imgSrc} alt="..." />
        </div>
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProducts}/>
    </>
  );
};

export default Detail;
