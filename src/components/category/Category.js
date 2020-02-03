import React from 'react';

import seafood from './../../assets/img/seafood.jpg';
import beef from './../../assets/img/beef.jpg';
import chicken from './../../assets/img/chicken.jpg';
import pasta from './../../assets/img/pasta.jpg';
import pork from './../../assets/img/pork.jpg';
import lamb from './../../assets/img/lamb.jpg';

import './Category.scss';
import CategoryCard from './CategoryCard';

const Category = () => {
  return (
    <div className='category'>
      <h1 className='category__title'>Popular Category</h1>
      <div className='category__list'>
        <div className='category__item'>
          <CategoryCard imageSrc={seafood} name='seafood' />
        </div>
        <div className='category__item'>
          <CategoryCard imageSrc={beef} name='beef' />
        </div>
        <div className='category__item'>
          <CategoryCard imageSrc={chicken} name='chicken' />
        </div>
        <div className='category__item'>
          <CategoryCard imageSrc={pasta} name='pasta' />
        </div>
        <div className='category__item'>
          <CategoryCard imageSrc={pork} name='pork' />
        </div>
        <div className='category__item'>
          <CategoryCard imageSrc={lamb} name='lamb' />
        </div>
      </div>
    </div>
  );
};

export default Category;
