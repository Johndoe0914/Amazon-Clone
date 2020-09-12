import React from "react";
import Checkout from "./Checkout";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ item, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button></button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
