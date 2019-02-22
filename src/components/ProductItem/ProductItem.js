import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    const productID = this.props.match.params.id;
    return (
      <div>
        <h1>I am product {productID}</h1>
      </div>
    );
  }
}

export default ProductItem;
