import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from '../Products';
import NotFound from '../NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route component={Products} path="/"/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default App;
