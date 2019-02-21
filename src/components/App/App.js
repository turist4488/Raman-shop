import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import ProductList from '../ProductList';

class App extends Component {
  render() {
    return (
          <Switch>
            <Route component={ProductList} path='/' exact/>
          </Switch>
    );
  }
}

export default App;
