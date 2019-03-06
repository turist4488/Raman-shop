import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

class Products extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ProductList} exact />
        <Route path="/products" component={ProductList} exact />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
    );
  }
}

export default Products;
