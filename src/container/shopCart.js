import React, { Component } from 'react';
import { connect } from 'react-redux';
// import CartItem from './cartItem';


class ShopCart extends Component {
  renderListCart() {
    return this.props.items.map((item) => {
      return (
        <div>

        <div className="col-md-4">
        <div className="thumbnail">
        <img src={item.imagePath} alt="Smiley face" height="120" width="120" />
        </div>

        </div>
        <div className="col-md-8">
        <div className="thumbnail">

        <p>{item.description}</p>
        <p>{item.price}</p>
        <p>Quantity <span className="badge">2 </span>&nbsp;&nbsp;
        <button type="button" className="btn btn-danger"> Remove</button>
    </p>
    </div>

        </div>

        </div>

      );
    });
  }


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
                </div>

                <div className="row">


                {this.renderListCart()}
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
