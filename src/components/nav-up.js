
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image } from 'react-bootstrap';
import ShopCart from '../container/shopCart';


class NavUp extends Component {
  render() {
    return (
      <div id="navup">
        <div className="row upbanner">
          <div className="col-md-12" />
        </div>
        <div className="row nameSite">
          <div className="col-md-4">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </div>
          <div className="col-md-4 name">
            <Link to="/">
            <Image src="/img/logo/logo3.jpg" />
            </Link>
          </div>
          <div className="shopCart">
          <Link className="shopCart" to="ShopCart"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Shopping Cart</Link>

          </div>


        </div>
      </div>

    );
  }
}

export default NavUp;
