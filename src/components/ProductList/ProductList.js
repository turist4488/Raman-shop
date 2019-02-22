import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

import products from './phones/phones';

class ProductList extends Component {
  render() {
    const imagesURL =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <p>
              Search: <input type="text" />
            </p>
            <p>
              Sort by:
              <select name="" id="">
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </div>
          <div className="col-md-10">
            <ul className="phones">
              {products.map(product => (
                <ProductListItem
                  id={product.id}
                  imgURL={imagesURL + product.imageUrl}
                  title={product.name}
                  snippet={product.snippet}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
