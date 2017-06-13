import React, { Component } from 'react';


class CartItem extends Component {

  render() {  
      return (
      <div>
            <div className="row">

            <div>

            <div className="col-xs-6 col-md-3">
              <div className="thumbnail">
                <img src={this.props.item} />
              </div>
            </div>
            <div className="col-md-4">
            <h3>{this.props.item}</h3>
            <p>{this.props.item}</p>
            <p>{this.props.item}</p>
            <p>
              <button bsStyle="btn btn-info">Remove</button>&nbsp;
              </p>
            </div>
            </div>
            </div>


        </div>

    );
  }
}

export default CartItem;
