import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { MenuItem, NavItem, Navbar, NavDropdown, Nav, Glyphicon } from 'react-bootstrap';



class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
	
			return (
			<Navbar className="navbar-form navbar-fixed-top">
			
			<Nav className="navbar">
			<NavItem className="about"eventKey={2}><Link to="nosotros">About</Link></NavItem>
			<NavItem eventKey={3}><Link to="contacto">Contact Us</Link></NavItem>
			<NavDropdown eventKey={4} title="Shop" id="basic-nav-dropdown">
				<MenuItem eventKey={4.1} ><Link to="necklace">Necklaces</Link></MenuItem>
				<MenuItem eventKey={4.2}><Link to="pulseras">Bracelet</Link></MenuItem>
				<MenuItem eventKey={4.3}><Link to="earing">Earings</Link></MenuItem>
			</NavDropdown> 

		
			{ this.renderSignIn(authenticated) } 

			<NavItem eventKey={16}>&nbsp;Shopping Cart &nbsp;<Glyphicon glyph="glyphicon glyphicon-shopping-cart" /></NavItem>

			
	
			</Nav>
			</Navbar>
		
			);
		}	
	
		renderSignIn(authenticated) {
			console.log(authenticated);
			if (authenticated) {
				return (
					

					<NavItem eventKey={9}><Link to="/signout">Log out</Link></NavItem>

					

				

				);	    
			} else {
				return (
					<Nav>	
						<NavItem eventKey={6}><Link to="/signin">Sign in  |</Link></NavItem>
						<NavItem eventKey={7}><Link to="/signup">Sign up</Link></NavItem>	
					</Nav>
				);    	
			}
		}
		render() {
			return (
				<div>
				
				
						{this.renderLinks()}	

				
				
				
				</div>
			);
		}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);


