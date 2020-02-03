import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
