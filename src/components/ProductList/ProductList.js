import React, { Component } from 'react';
import ProductListItem from '../ProductListItem';
import ListSearchForm from '../ListSearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const dataURL =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';

class ProductList extends Component {
  state = {
    products: [],
    searchQuery: '',
    error: '',
  };

  componentDidMount() {
    fetch(dataURL)
      .then(response => {
        if (response.status === 404) throw new Error('Failed to load data!');
        return response.json();
      })
      .then(dataJSON =>
        this.setState({
          products: [...dataJSON],
        })
      )
      .catch(e => {
        this.setState({
          error: e.message,
        });
      });
  }

  handleSearchQuery = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleSelectSortMethod = e => {};

  render() {
    const imagesURL =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    const { searchQuery, products, error } = this.state;

    if (error) {
      return <h1 style={{ color: 'red' }}>{error}</h1>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <ListSearchForm
            className="col-md-2"
            query={searchQuery}
            handleInput={this.handleSearchQuery}
            handleSelectBtn={this.handleSelectSortMethod}
          />
          <div className="col-md-9 ml-auto">
            <div className="d-flex flex-wrap">
              {products
                .filter(i =>
                  i.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
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
