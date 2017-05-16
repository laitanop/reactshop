import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { MenuItem, NavItem, Navbar, NavDropdown, Nav } from 'react-bootstrap';


class Header extends Component {

	renderLinks() {
		const authenticated = this.props.authenticated;


			return (
				<Nav>

				<NavItem eventKey={1}><Link to="about_us">About</Link></NavItem>
        <NavItem eventKey={2}><Link to="contact">Contact Us</Link></NavItem>
        <NavDropdown eventKey={3} title="Collections" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}><Link to="pulseras">Bracelet</Link></MenuItem>
          <MenuItem eventKey={3.2}><Link to="earing">Earings</Link></MenuItem>
          // <MenuItem eventKey={3.3}><Link to="necklace">Necklaces</Link></MenuItem>
        </NavDropdown>
				{ this.renderSignIn(authenticated) }

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
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
