import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./styles/TopNav.css";

class TopNav extends React.Component {
  render() {
    return (
      <Navbar className="topnav px-5" collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href="/"> || Betty Barreto ||</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/constelaciones">Constelaciones</Nav.Link>
            <Nav.Link href="/ejercicios">Ejercicios</Nav.Link>
            <Nav.Link href="/talleres">Talleres</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;