import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "../styles/TopNav.css";


class TopNav extends React.Component {
  render() {
    return (
      <Navbar className="topnav" collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home"> ||| Betty Barreto ||</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Constelaciones</Nav.Link>
            <Nav.Link href="#pricing">Ejercicios</Nav.Link>
            <Nav.Link href="#pricing">Talleres</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
