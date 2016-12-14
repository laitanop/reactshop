 
import React, { Component } from 'react';
import { NavItem, Navbar, Nav } from 'react-bootstrap';



class NavBar extends Component {
  render() {
    return (
      <div>
     <Nav bsStyle="tabs">
        <NavItem eventKey="1" href="preguntas">Preguntas Frecuentes</NavItem>
        <NavItem eventKey="2" title="">NavItem 2 content</NavItem>
        </Nav>
      
</div>
      
    );
  }
}

export default NavBar;




