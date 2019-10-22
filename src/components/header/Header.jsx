import React from 'react';
import { NavLink } from "react-router-dom";
import {Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

function Header() {
  return (
  <header>
   
        <Navbar color="light" light expand="md">
           <Container>  <NavbarBrand>reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem><NavLink exact to="/">Home</NavLink></NavItem>
                <NavItem><NavLink exact to="/about">About</NavLink></NavItem>
            </Nav>
    </Container>
        </Navbar>

        {/* <div className="row">
          <div className="col-6"><img alt="" src={require('../../assets/images/loginlogo.png')}/></div> 
          <div className="col-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          </div> 
        </div> */}
  </header>
  );
}

export default Header;