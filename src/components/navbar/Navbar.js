import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../searchbar/SearchBar';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__logo'>
        FoodRecipes
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
