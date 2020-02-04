import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Category from './components/category/Category';
import CategoryList from './components/category/CategoryList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Category} />
          <Route exact path='/category/:id' component={CategoryList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
