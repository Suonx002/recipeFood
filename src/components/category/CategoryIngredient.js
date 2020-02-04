import React from 'react';

import './CategoryIngredient.scss';

const CategoryIngredient = props => {
  const { meal } = props;
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      // Stop if no more ingredients
      break;
    }
  }

  // console.log(ingredients);
  // console.log(meal);

  return (
    <div className='category-ingredient'>
      <ul className='category-ingredient__list'>
        {ingredients !== null &&
          ingredients.length > 0 &&
          ingredients.map((ing, index) => (
            <li className='category-ingredient__item' id={index}>
              {ing}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryIngredient;
