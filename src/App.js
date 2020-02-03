import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/navbar/Navbar';
import Category from './components/category/Category';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Category} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
