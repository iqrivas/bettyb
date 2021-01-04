import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import "./styles/TopNav.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

class TopNav extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Navbar className="" collapseOnSelect expand="lg" variant="dark" >
        <Navbar.Brand className="pre-nav" href="/"> 
            <a href="/" className="logo"> <FontAwesomeIcon icon={faSpa} size="1x" />
                          &nbsp;Betty Barreto</a> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/meditaciones">Meditaciones</Nav.Link>
            <Nav.Link href="/constelaciones">Constelaciones</Nav.Link>
            <Nav.Link href="/talleres">Talleres</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
                
      </React.Fragment>
    );
  }
}

export default TopNav;
