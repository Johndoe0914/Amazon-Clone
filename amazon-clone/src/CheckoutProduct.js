import React from "react";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
  const [{}, dispatch] = useStateValue();

  const removefrombasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
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

        {!hideButton && (
          <button onClick={() => removefrombasket(id)}>
            Remove From Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
