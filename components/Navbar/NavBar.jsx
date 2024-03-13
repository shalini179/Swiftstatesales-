import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../components/imagee/icons8-home-64.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary pt-0 mt-0">
      <Container className='pt-0 mt-0'>
        <Navbar.Brand href="#home"className="custom-navbar-brand"> SWIFTESTATE SALES </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className={`m-1 ${location.pathname === '/' ? 'active' : ''}`}>HOME</Nav.Link>
          <Nav.Link href="/properties" className={`m-1 ${location.pathname === '/properties' ? 'active' : ''}`}>PROPERTIES</Nav.Link>
          <Nav.Link href="/services" className={`m-1 ${location.pathname === '/services' ? 'active' : ''}`}>SERVICES</Nav.Link>
          <Nav.Link href="/aboutus" className={`m-1 ${location.pathname === '/aboutus' ? 'active' : ''}`}>ABOUT US</Nav.Link>
          <Nav.Link href="/contactus" className={`m-1 ${location.pathname === '/contactus' ? 'active' : ''}`}>CONTACT US</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
