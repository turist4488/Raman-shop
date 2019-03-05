import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductListItem.scss';
import { addToCart } from '../../redux/actions';
import { connect } from 'react-redux';

class ProductListItem extends Component {
  addItemToCart = product => {
    this.props.dispatch(addToCart(product));
  };

  render() {
    const { id, imgURL, title, snippet, cart } = this.props;
    const product = {
      id,
      imgURL,
      title,
    };

    const isInCart = cart.find(item => {
      return item.id === id;
    });

    return (
      <div className="product-list__item d-flex flex-wrap">
        <Link className="d-block pt-3" to={`/products/${id}`}>
          <img className="d-block mx-auto w-75 h-auto" src={imgURL} alt="" />
        </Link>
        <div className="w-100 d-flex product-list__item-bottom align-items-center">
          <Link className="col-9 text-white font-weight-bold" to={`/products/${id}`}>{title}</Link>
          {/*<p className="product-list__item-descr">{snippet}</p>*/}
          <button
            className={isInCart
              ? "d-block to-cart-btn to-cart-btn--disabled py-2"
              : "d-block to-cart-btn py-2"}
            onClick={() => this.addItemToCart(product)}
            disabled={isInCart}
          >
            <i className={isInCart
              ? "fas fa-cart-arrow-down"
              : "fas fa-cart-plus"}
            > </i>
          </button>
        </div>
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
