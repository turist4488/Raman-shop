import React, { Component } from 'react';
import ProductListItem from '../ProductListItem';
import ListSearchForm from '../ListSearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Loader';

const dataURL =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';

class ProductList extends Component {
  state = {
    products: null,
    searchQuery: '',
    sortType: 'alphabetical',
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

  handleSelectSortMethod = e => {
    this.setState({
      sortType: e.target.value
    })
  };

  getSortComparator = (type) => {
    switch (type) {
      case 'newest': return (a,b)=>{
        return b.age - a.age
      };
      case 'alphabetical': return (a,b)=>{
        return (a.name > b.name) - (a.name < b.name)
      };
    }
  };

  render() {
    const imagesURL =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    const { searchQuery, products, sortType, error } = this.state;

    if (error) {
      return <h1 style={{ color: 'red' }}>{error}</h1>;
    }

    if (!products) {
      return <Loader />;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <ListSearchForm
            query={searchQuery}
            handleInput={this.handleSearchQuery}
            handleSelectBtn={this.handleSelectSortMethod}
          />
          <div className="col-md-12 mx-auto">
            <div className="d-flex product-list justify-content-between flex-wrap">
              {products
                .filter(i =>
                  i.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .sort(this.getSortComparator(sortType))
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
