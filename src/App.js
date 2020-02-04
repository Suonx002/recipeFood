import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Category from './components/category/Category';
import CategoryList from './components/category/CategoryList';
import CategoryItem from './components/category/CategoryItem';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Category} />
          <Route exact path='/category/:id' component={CategoryList} />
          <Route exact path='/category/:id/:mealId' component={CategoryItem} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
