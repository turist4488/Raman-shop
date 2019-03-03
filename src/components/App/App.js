import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from '../Products';
import Cart from '../Cart';
import NavBar from '../NavBar';
import NotFound from '../NotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route component={Products} path="/" exact/>
          <Route component={Products} path="/products" />
          <Route component={Cart} path="/cart"/>
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
