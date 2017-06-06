import React, { Component } from 'react';


class CartItem extends Component {

  render() {
    return (
      <div>
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <div className="thumbnail">
                  <img src="img/items/aretes/1.jpg" alt="50x50" />
                </div>
              </div>
              <div className="col-md-4">
              <h3>Name</h3>
              <p>Price</p>
              <p>count</p>
              <p>
                <button bsStyle="btn btn-info">Remove</button>&nbsp;
                </p>
              </div>
            </div>


        </div>

    );
  }
}

export default CartItem;
