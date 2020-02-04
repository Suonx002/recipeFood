import React from 'react';

import './CategoryCard.scss';

const CategoryCard = ({ imageSrc, name }) => {
  return (
    <div className='category-card'>
      <div className='category-card__item'>
        <h2 className='category-card__name'>{name}</h2>
        <img src={imageSrc} alt={name} className='category-card__img' />
      </div>
    </div>
  );
};

export default CategoryCard;
