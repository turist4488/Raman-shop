import React, { Component } from 'react';
import ProductListItem from '../ProductListItem';
import ListSearchForm from '../ListSearchForm';

import products from './phones/phones';

class ProductList extends Component {

  newestSort = (a, b) => {
    return a.age - b.age
  };

  alphabeticalSort = (a, b) => {
    return (a.name < b.age) - (a.name > b.age)
  };

  state = {
    products: [...products],
    searchQuery: '',
    sortAs: this.newestSort
  };

  handleSearchQuery = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  };

  handleSelectSortMethod = (e) => {

    e.target.value === 'newest'
      ? this.setState({
      sortAs: this.newestSort
      })
      : this.setState({
        sortAs: this.alphabeticalSort
      })
  };

  render() {
    const imagesURL =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    const { searchQuery, products, sortAs } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <ListSearchForm
            query={searchQuery}
            handleInput={this.handleSearchQuery}
            handleSelectBtn={this.handleSelectSortMethod}
          />
          <div className="col-md-10">
            <div className="phones">
              {products
                .filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .sort(sortAs)
                .map(product => (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  imgURL={imagesURL + product.imageUrl}
                  title={product.name}
                  snippet={product.snippet}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
