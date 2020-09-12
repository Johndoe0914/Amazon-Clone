import "./Product.css";
import { useStateValue } from "./StateProvider";

import React from "react";

const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
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
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='image' />
      <button onClick={() => addTobasket()}>Add to basket</button>
    </div>
  );
};

export default Product;
