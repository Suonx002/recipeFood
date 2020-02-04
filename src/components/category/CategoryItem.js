import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CategoryIngredient from './CategoryIngredient';

import './CategoryItem.scss';

const CategoryItem = props => {
  const [error, setError] = useState('');
  const [item, setItem] = useState([]);
  //   const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchMeal();
    //eslint-disable-next-line
  }, [props.match]);

  const fetchMeal = async () => {
    const res = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parseInt(
        props.match.params.mealId
      )}`
    );

    if (res.data.meals !== null) {
      //   createIngredient(res.data.meals);
      setItem(res.data.meals);
    } else {
      setError('No result with this id. Please try a different one!');
    }
  };

  return (
    <div className='category-item'>
      {error !== '' && <h3 className='category-item__error'>{error}</h3>}
      {item.length !== null &&
        item.map(meal => (
          <div className='category-item__list' id={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className='category-item__img'
            />

            <div className='category-item__content'>
              <div className='category-item__info'>
                <h3 className='category-item__title'>{meal.strMeal}</h3>
                <p className='category-item__category'>
                  <strong>Category: </strong>
                  <span>{meal.strCategory}</span>
                </p>
                <p className='category-item__area'>
                  <strong>Area: </strong>
                  <span>{meal.strArea}</span>
                </p>
              </div>
              <div className='category-item__instruction'>
                <strong>Instruction: </strong>
                <span>{meal.strInstructions}</span>
              </div>
              <div className='category-item__ingredient'>
                <CategoryIngredient meal={meal} />
              </div>
              <div className='category-item__btn'>
                <a
                  href={meal.strSource}
                  className='category-item__viewmore'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Visit Website
                </a>
              </div>
            </div>

            <div className='category-item__youtube'>
              <h3 className='category-item__youtube--title'>
                Video Instruction
              </h3>
              <iframe
                src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                width='100%'
                height='500'
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryItem;
