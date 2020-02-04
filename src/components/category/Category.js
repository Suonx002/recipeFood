import React from 'react';
import { Link } from 'react-router-dom';

import seafood from './../../assets/img/seafood.jpg';
import beef from './../../assets/img/beef.jpg';
import chicken from './../../assets/img/chicken.jpg';
import pasta from './../../assets/img/pasta.jpg';
import pork from './../../assets/img/pork.jpg';
import lamb from './../../assets/img/lamb.jpg';

import './Category.scss';
import CategoryCard from './CategoryCard';
import uuid from 'uuid/v4';

const Category = () => {
  return (
    <div className='category'>
      <h1 className='category__title'>Popular Category</h1>
      <div className='category__list'>
        <div className='category__item' id={uuid()}>
          <Link to='/category/seafood'>
            <CategoryCard imageSrc={seafood} name='seafood' />
          </Link>
        </div>
        <div className='category__item'>
          <Link to='/category/beef'>
            <CategoryCard imageSrc={beef} name='beef' />
          </Link>
        </div>
        <div className='category__item'>
          <Link to='/category/chicken'>
            <CategoryCard imageSrc={chicken} name='chicken' />
          </Link>
        </div>
        <div className='category__item'>
          <Link to='/category/pasta'>
            <CategoryCard imageSrc={pasta} name='pasta' />
          </Link>
        </div>
        <div className='category__item'>
          <Link to='/category/pork'>
            <CategoryCard imageSrc={pork} name='pork' />
          </Link>
        </div>
        <div className='category__item'>
          <Link to='/category/lamb'>
            <CategoryCard imageSrc={lamb} name='lamb' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
