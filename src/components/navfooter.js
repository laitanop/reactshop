 
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';


class NavFooter extends Component {
  render() {
    return (
      <div>
      <Navbar className="navfooter1">
      <Nav className="navfooter" bsStyle="tabs" >
      
      <p>Stay Connected</p>
   	 <NavItem href="https://www.facebook.com/Laitanos/#"><img src="img/glyphicon/fb.png" width="50" /></NavItem>
   	 <NavItem ><img src="img/glyphicon/t.png" width="50" /></NavItem>
   	 <NavItem ><img src="img/glyphicon/i.png" width="50" /></NavItem>
    
    
    
  </Nav>
  </Navbar>
</div>
      
    );
  }
}

export default NavFooter;

