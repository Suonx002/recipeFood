import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import CategoryCard from './CategoryCard';

import './CategoryList.scss';

const CategoryList = props => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const fetchCategory = async () => {
    const res = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.match.params.id}`
    );

    if (res.data.meals !== null) {
      setMeals(res.data.meals);
    } else {
      setError('Sorry, there are no results with this search...');
    }
  };

  useEffect(() => {
    fetchCategory();

    //eslint-disable-next-line
  }, [props.match.params.id]);

  return (
    <div className='category-list'>
      {error.length !== 0 && <p className='category-list__error'>{error}</p>}
      {meals.length !== 0 &&
        meals !== null &&
        meals.map(meal => (
          <Link
            id={meal.idMeal}
            to={`/category/${props.match.params.id}/${meal.idMeal}`}
            className='category-list__item'>
            <CategoryCard imageSrc={meal.strMealThumb} name={meal.strMeal} />
          </Link>
        ))}
    </div>
  );
};

export default CategoryList;
