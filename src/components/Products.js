import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './ProductItem';

class Products extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" component={ProductList} exact/>
          <Route path="/:id" component={Product}/>
        </Switch>
    );
  }
}

export default Products;