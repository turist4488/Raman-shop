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

  isMatchToFilter = (filters, product) => {
    filters.forEach(i => {
      Object.values(product).forEach(v => {
        if (typeof v === 'string')
          return v.toLowerCase().includes(i.toLowerCase())
      })
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

  render() {
    const { products, dataLoading, fetchError, filters } = this.props;

    const { searchQuery, sortType } = this.state;

    const imagesURL =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';

    if (dataLoading) {
      return <Loader />;
    }

    if (fetchError) {
      return <div>{fetchError}</div>;
    }

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

const mapStateToProps = state => {
  const { cart, products, filters, dataLoading, fetchError } = state;

  return {
    cart,
    products,
    filters,
    dataLoading,
    fetchError,
  };
};
export default connect(mapStateToProps)(ProductList);
