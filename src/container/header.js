import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { MenuItem, NavItem, Navbar, NavDropdown, Nav, Glyphicon, Badge } from 'react-bootstrap';
import NavBarCart from './navBarCart';


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}
	handleOpen = () => {
		this.setState({ isOpen: true });
	}
	handleClose = () => {
		this.setState({ isOpen: false });
	}

	renderLinks() {
		const authenticated = this.props.authenticated;

			return (
				<Nav>
				<NavItem eventKey={0}><Link to="/">Home</Link></NavItem>
				<NavItem eventKey={1}><Link to="about_us">About</Link></NavItem>
        <NavItem eventKey={2}><Link to="contact">Contact Us</Link></NavItem>
				<NavDropdown
				onMouseEnter={this.handleOpen}
				onMouseLeave={this.handleClose}
				open={this.state.isOpen}
				eventKey={3} title="Collections" id="basic-nav-dropdown"
				>
  <MenuItem
					id="itemcolor"eventKey={3.1}
		>
					<Link to="pulseras" id="itemcolor">Bracelet</Link></MenuItem>
  <MenuItem
					id="itemcolor"eventKey={3.2}
		>
					<Link to="earing" id="itemcolor">Earrings</Link></MenuItem>
          {/* <MenuItem eventKey={3.3}><Link to="necklace">Necklaces</Link></MenuItem>*/}
        </NavDropdown>


				{ this.renderSignIn(authenticated) }
				<NavItem
				eventKey={7}
				><Link
				className=""
				to="ShopCart"
				>
				<Glyphicon glyph="shopping-cart" aria-hidden="true" /> Shopping Cart: <Badge>{this.props.cartCount}</Badge></Link></NavItem>

				</Nav>

			);
		}

		renderSignIn(authenticated) {
			console.log(authenticated);
			if (authenticated) {
				return (


					<NavItem eventKey={6}><Link to="/signout"> Log out</Link></NavItem>

				);
			} else {
				return (
					<Nav>
						<NavItem eventKey={4}><Link to="/signin"> Sign in</Link></NavItem>
						<NavItem eventKey={5}><Link to="/signup"> Sign up</Link></NavItem>
					</Nav>
				);
			}
		}
		render() {
			return (

		<Navbar className="navbar"collapseOnSelect >
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {this.renderLinks()}

      </Nav>
    </Navbar.Collapse>
  </Navbar>


			);
		}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated,
		cartCount: state.cart.count };
}

export default connect(mapStateToProps, null)(Header);
