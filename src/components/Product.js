import React from "react";
import { Link } from "react-router-dom";

import "../styles/Product.css";

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/products/product/${product._id}`}>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <h2>{product.name}</h2>
        <Rating rating={product.rating} numRev={product.numRev} />
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default Product;
