import React from 'react';

import './SearchBar.scss';
const SearchBar = () => {
  return (
    <div className='searchbar'>
      <form className='searchbar__form'>
        <input
          type='text'
          placeholder='Search for foods ...'
          className='searchbar__input'
        />
        <button type='submit' className='searchbar__btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
