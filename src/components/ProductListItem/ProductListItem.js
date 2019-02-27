import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductListItem.scss';

class ProductListItem extends Component {
  render() {
    const { id, imgURL, title, snippet } = this.props;
    return (
      <div className="d-sm-flex col-sm-12 product-list__item align-items-center p-2">
        <Link className="col-5" to={`/products/${id}`}>
          <img className="w-100 h-auto" src={imgURL} alt="" />
        </Link>
        <div className="">
          <Link to={`/products/${id}`}>
            {title}
          </Link>
          <p>{snippet}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
