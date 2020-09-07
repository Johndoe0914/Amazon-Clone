import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://www.pngitem.com/pimgs/m/1-12080_amazon-logo-png-amazon-white-text-logo-transparent.png'
          alt='amazon logo'
        />
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link className='header__link' to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'> hello johhny</span>
            <span className='header__optionLineTwo'>Sign in</span>
          </div>
        </Link>

        <Link className='header__link' to='/n'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link className='header__link' to='/'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link className='header__link' to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>o</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
