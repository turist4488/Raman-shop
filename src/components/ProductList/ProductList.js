import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import products from './phones/phones';

class ProductList extends Component {
  render() {
    const imagesURL = 'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
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
                  <li className="thumbnail">
                    <Link className="thumb" to={product.id}>
                      <img src={imagesURL + product.imageUrl} alt="" />
                    </Link>
                    <Link to={product.id}>{product.name}</Link>
                    <p>{product.snippet}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default ProductList;
