import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductListItem.scss';
import { addToCart } from '../../redux/actions';
import { connect } from 'react-redux';

class ProductListItem extends Component {

  addItemToCart = (id) => {
    this.props.dispatch(addToCart(id));
  };

  render() {
    const { id, imgURL, title, snippet, cart } = this.props;
    return (
      <div className="d-sm-flex col-sm-12 product-list__item position-relative align-items-center p-2">
        <Link className="col-5" to={`/products/${id}`}>
          <img className="w-100 h-auto" src={imgURL} alt="" />
        </Link>
        <div className="">
          <Link to={`/products/${id}`}>
            {title}
          </Link>
          <p>{snippet}</p>
        </div>
        <button
          className="to-cart-btn font-weight-bold text-uppercase"
          onClick={() => this.addItemToCart(id)}
          disabled={cart.includes(id)}
        >
          to cart
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(ProductListItem);
