import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.scss';
import { removeFromCart } from '../../redux/actions';
import { connect } from 'react-redux';

class Cart extends Component {

  removeFromCart = id => {
    this.props.dispatch(removeFromCart(id));
  };

  render() {
    const { cart } = this.props;

    if (cart.length === 0) {
      return (
        <div className="h-100 container-fluid">
          <h1 className="text-center mt-5">ТУТ МОЖЕ БУТИ ВАША РЕКЛАМА</h1>
        </div>
      )
    }
    return (
      <div className="container cart">
        {cart.map(item => {
          return (
            <div key={item.id} className="row cart__item py-3 pr-3 my-4">
              <img className="col-2 cart__item-img" src={item.imgURL} alt="product"/>
              <h4 className="col-5 cart__item-title">{item.title}</h4>
              <button
                className="cart__item-cancel-btn d-inline-block p-0 ml-auto align-self-center"
                onClick={() => this.removeFromCart(item.id)}
              >
                <i className="fas fa-times"> </i>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
