import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductListItem.scss';

class ProductListItem extends Component {
  render() {
    const { id, imgURL, title, snippet } = this.props;
    return (
      <div className="d-lg-flex product-list__item w-100 align-items-center my-2 p-2">
        <Link className="col-2" to={id}>
          <img className="w-100 h-auto" src={imgURL} alt="" />
        </Link>
        <div className="align-self-start">
          <Link className="" to={id}>
            {title}
          </Link>
          <p>{snippet}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
