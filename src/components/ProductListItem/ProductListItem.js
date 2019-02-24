import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductListItem.scss';

class ProductListItem extends Component {
  render() {
    const { id, imgURL, title, snippet } = this.props;
    return (
      <div className="thumbnail">
        <Link className="thumb" to={id}>
          <img src={imgURL} alt="" />
        </Link>
        <Link to={id}>{title}</Link>
        <p>{snippet}</p>
      </div>
    );
  }
}

export default ProductListItem;
