import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg'
        alt=''
      />

      <div className='home__row'>
        <Product
          id={12344543}
          title='The NEW Blink 4K HD  Security Camera'
          price={12.99}
          rating={3}
          image='https://images.homedepot-static.com/productImages/7b5edb1a-feaa-48d1-9543-9805a336bb71/svn/black-blink-smart-security-camera-systems-b07mmz2ltb-64_400.jpg'
        />
        <Product
          id={12344543}
          title='Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band'
          price={99.99}
          rating={3}
          image='https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_UY218_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id={12344543}
          title='Instant Pot Duo Mini 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer'
          price={12.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/71Vyt-4fD8L._AC_UL200_SR200,200_.jpg'
        />
        <Product
          id={12334543}
          title='Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)'
          price={12.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SX342_.jpg'
        />
        <Product
          id={12344543}
          title='Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for phone-call and Alexa Voice Control'
          price={150.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/51IdLe-%2B6kL._AC_SL1500_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id={12344543}
          title='SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU8000FXZA, 2020 Model)'
          price={349.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
