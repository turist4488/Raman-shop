import React, { Component } from 'react';
import ProductListItem from '../ProductListItem';
import ListSearchForm from '../ListSearchForm';
import ProductFilter from '../ProductListFilter/ProductsFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Loader';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

class ProductList extends Component {
  state = {
    searchQuery: '',
    sortType: 'alphabetical',
  };

  componentDidMount() {
    this.props.dispatch(actions.getProducts());
  }

  handleSearchQuery = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleSelectSortMethod = e => {
    this.setState({
      sortType: e.target.value,
    });
  };

  getSortComparator = type => {
    switch (type) {
      case 'newest':
        return (a, b) => {
          return b.age - a.age;
        };
      case 'alphabetical':
        return (a, b) => {
          return (a.name > b.name) - (a.name < b.name);
        };
      default:
        return (a, b) => {
          return (a.name > b.name) - (a.name < b.name);
        };
    }
  };

  getFilteredProducts = (filters, products) => {
    let result = [];
    filters.forEach(f => {
      products.forEach(p => {
        if (
          JSON.stringify(p)
            .toLowerCase()
            .includes(f.toLowerCase())
        )
          result.push(p);
      });
    });
    return result;
  };

  render() {
    const { products, dataLoading, filters, fetchError } = this.props;

    const { searchQuery, sortType } = this.state;

    const imagesURL =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';

    if (dataLoading) {
      return <Loader />;
    }

    if (fetchError) {
      return <div>{fetchError}</div>;
    }

    const filteredProducts = filters.length
      ? this.getFilteredProducts(filters, products)
      : products;
    return (
      <div className="container-fluid">
        <div className="row">
          <ListSearchForm
            query={searchQuery}
            handleInput={this.handleSearchQuery}
            handleSelectBtn={this.handleSelectSortMethod}
          />
          <div className="col-md-12 mx-auto d-flex">
            <ProductFilter />
            <div className="d-flex product-list justify-content-around flex-wrap">
              {filteredProducts
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

const mapStateToProps = state => {
  const { cart, products, dataLoading, filters, fetchError } = state;

  return {
    cart,
    products,
    dataLoading,
    filters,
    fetchError,
  };
};
export default connect(mapStateToProps)(ProductList);
