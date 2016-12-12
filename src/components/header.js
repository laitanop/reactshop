import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { MenuItem, NavItem, Navbar, NavDropdown, Nav, FormControl, Glyphicon } from 'react-bootstrap';


class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
	
			return (
			<Navbar>
			
			<Nav>
			<NavItem eventKey={1}><Link to="/"><img className="lead float-xs-left" role="presentation" src="img/logo/logo1.jpg" width="100" height="" /></Link></NavItem>
				<NavItem eventKey={2}><Link to="nosotros">Nosotros</Link></NavItem>
				<NavItem eventKey={3}><Link to="contacto">Contacto</Link></NavItem>
					<NavDropdown eventKey={4} title="Tienda" id="basic-nav-dropdown">
						<MenuItem eventKey={4.1} ><Link to="collares">Collares</Link></MenuItem>
						<MenuItem eventKey={4.2}><Link to="pulseras">Pulseras</Link></MenuItem>
						<MenuItem eventKey={4.3}><Link to="aretes">Aretes</Link></MenuItem>
					</NavDropdown> 	
		
			{ this.renderSignIn(authenticated) } 
			
			<NavItem eventKey={16}>&nbsp;Carrito &nbsp;<Glyphicon glyph="glyphicon glyphicon-shopping-cart" /></NavItem>
			<NavItem eventKey={15}><FormControl type="text" placeholder="Buscar..." /></NavItem>	 
			</Nav>
			</Navbar>
		
			);
		}	
	
		renderSignIn(authenticated) {
			console.log(authenticated);
			if (authenticated) {
				return (
					<NavItem eventKey={9}><Link to="/signout">Cerrar Sesion</Link></NavItem>
				);	    
			} else {
				return (
					<Nav>	
						<NavItem eventKey={6}><Link to="/signin">Iniciar Sesión  |</Link></NavItem>
						<NavItem eventKey={7}><Link to="/signup">Registrarse</Link></NavItem>	
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


