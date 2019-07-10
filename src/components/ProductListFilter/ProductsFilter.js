import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductsFilter.scss';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../../redux/actions';

const FILTERS = [
  {
    category: 'producerName',
    name: 'Producer',
    items: ['Samsung', 'Dell', 'Motorola', 'LG', 'Google', 'Other'],
  },
  {
    category: 'operatingSystem',
    name: 'OS',
    items: ['IOS', 'Android'],
  },
];

class ProductsFilter extends Component {
  addFilter = name => {
    this.props.dispatch(addFilter(name));
  };

  removeFilter = name => {
    this.props.dispatch(removeFilter(name));
  };

  handleFilterChecked = (e, filterValue) => {
    return e.target.checked
      ? this.addFilter(filterValue)
      : this.removeFilter(filterValue);
  };

  render() {
    return (
      <ul className="py-3 mr-3 float-left list-unstyled products-filters">
        {FILTERS.map(filter => {
          return (
            <li key={filter.category} className="px-0 products-filters__item">
              <span className="d-block pl-2 products-filters__item-title">
                {filter.name}
              </span>
              <ul key={filter.category} className="ml-3 py-2 list-unstyled">
                {filter.items.map(item => {
                  return (
                    <li
                      key={item.toLowerCase()}
                      className="products-filters__item-value"
                    >
                      <input
                        className="products-filters__item-check"
                        type="checkbox"
                        id={item}
                        onChange={e => this.handleFilterChecked(e, item)}
                      />
                      <label
                        className="products-filters__item-label pl-4 ml-1 mb-0"
                        htmlFor={item}
                      >
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { filters } = state;

  return {
    filters,
  };
};
export default connect(mapStateToProps)(ProductsFilter);
