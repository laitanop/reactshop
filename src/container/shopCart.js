import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';


class ShopCart extends Component {

  render() {
    return (
      <div>
            <div className="row">
              <div className="col-md-8">
                <h4>My Cart</h4>
              </div>
              <div className="col-md-4">
                <h4 className="continueShopping">Continue Shopping</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="panel panel-default">
                  <div className="panel-heading">Products</div>
                  <CartItem item={this.items} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading products">Subtotal</div>
                </div>
              </div>
            </div>


        </div>

    );
  }
}


function mapStateToProps(state) {
  return { items: state.cart.items };
}

export default connect(mapStateToProps, null)(ShopCart);
