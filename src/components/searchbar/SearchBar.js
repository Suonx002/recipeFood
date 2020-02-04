import React, { useState } from 'react';

import './SearchBar.scss';
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const onChange = e => {
    setSearchInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(searchInput);
  };
  return (
    <div className='searchbar'>
      <form className='searchbar__form' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search for foods ...'
          className='searchbar__input'
          onChange={onChange}
          value={searchInput}
        />
        <button type='submit' className='searchbar__btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
