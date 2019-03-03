import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="d-flex align-items-center py-2">
          <Link className="d-inline-block col-sm-1 mr-auto logo" to="/">
            <span className="text-monospace font-italic">Raman</span><span>=></span>
            <span>
              {<span>shop</span>}
            </span>
          </Link>
          <Link className="d-inline-block text-center col-sm-1 ml-auto cart-btn py-2 btn-primary" to="/cart">Cart</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
