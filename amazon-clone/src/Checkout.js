import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <img
        className='checkout__ad'
        src='https://m.media-amazon.com/images/G/01/shazam/I-AMB-ECM-001-STB-DTP-970x250-S-N-EN-NA-EG-PST-DEV-AMZ-SSCA122-9-XpgK9._V405523589_.jpg'
        alt=''
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
