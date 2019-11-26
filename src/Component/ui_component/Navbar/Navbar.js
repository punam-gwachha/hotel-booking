import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';

import Login from '../../../image/login.jpg';

export default function Navbars() {
  const [isLoggedIn, setIslogged] = useState(true);
  return (
    <NavWrapper>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/" className="logo">
            <span className="logo_secondary">B</span>ook Hotels
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Popular Hotels</Nav.Link>

              {isLoggedIn ? (
                <NavDropdown
                  title={<img src={Login} />}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/details">Contact</NavDropdown.Item>
                  <NavDropdown.Item href="#">setting</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <React.Fragment>
                  <Nav.Link href="#link">Login</Nav.Link>
                  <Nav.Link href="#link">SignUp</Nav.Link>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;
  font-family: 'Poppins', sans-serif;
  .navbar-light .logo {
    color: #3b28cc;
    font-weight: 700;
  }
  .logo_secondary {
    color: #3b28cc;
    font-weight: 700;
    font-size: 30px;
  }
  .nav-link {
    color: rgba(5, 5, 5, 0.8) !important;
    font-weight: 700 !important;
    text-transform: capitalize;
    font-size: 16px;
    padding-right: 30px !important;
  }
  .nav-link:hover {
    color: rgba(5, 5, 5, 0.5) !important;
  }
  .dropdown-toggle::after {
    content: none;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
