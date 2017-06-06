import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavBarCart extends Component {
	render() {
		return (
            <div className="shopCart">
                <div>{this.props.cartCount}</div>
                <Link className="shopCart" to="ShopCart">
                    <span 
                        className="glyphicon glyphicon-shopping-cart" 
                        aria-hidden="true" 
                    /> 
                Shopping Cart
                </Link>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return { cartCount: state.cart.count };
}

export default connect(mapStateToProps, null)(NavBarCart);
