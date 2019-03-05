import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    const { cart, dataLoading } = this.props;
    if(dataLoading) {
      return (<div> </div>);
    }
    return (
      <div className="container-fluid nav-bar">
        <div className="d-flex container align-items-center py-2">
          <Link className="d-inline-block nav-link p-0 mr-auto nav-bar__logo" to="/">
            <span>M</span><span>A</span>
            <span>G</span>
            <span>A</span><span>Z</span>
          </Link>
          <Link
            className="nav-bar__cart-btn d-inline-block ml-auto"
            to="/cart"
          >
            <span className="nav-bar__cart-btn-counter">
              {cart.length}
            </span>
            <i className="fas fa-shopping-basket"> </i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    dataLoading: state.dataLoading,
  };
}

export default connect(mapStateToProps)(NavBar);
