import "./Product.css";

import React from "react";

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='image' />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
