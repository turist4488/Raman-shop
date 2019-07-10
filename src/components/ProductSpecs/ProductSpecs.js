import React, { Component } from 'react';
import SpecItem from '../ProductSpecItem/SpecItem';

class ProductSpecs extends Component {
  render() {
    const { title, specArrName, value } = this.props;
    return (
      <div className="product__specs-item">
        <strong className="d-block product__specs-title text-capitalize">
          {title}
        </strong>
        <SpecItem
          specName={specArrName}
          value={typeof value === 'string' ? [...[], value] : value}
        />
      </div>
    );
  }
}

export default ProductSpecs;
