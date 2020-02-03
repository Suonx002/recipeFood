import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryCard.scss';

const CategoryCard = ({ imageSrc, name }) => {
  return (
    <div className='category-card'>
      <Link to={`category/${name}`} className='category-card__item'>
        <h2 className='category-card__name'>{name}</h2>
        <img src={imageSrc} alt={name} className='category-card__img' />
      </Link>
    </div>
  );
};

export default CategoryCard;
