import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import "./styles/TopNav.css";

class TopNav extends React.Component {
  render() {
    return (
      <React.Fragment>
                <nav className="pre-nav">
                    <a href="/" className="logo">
                        <FontAwesomeIcon icon={faSpa} size="1x" />
                        &nbsp;Betty Barreto
                    </a>
                </nav>
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/meditaciones">Meditaciones</a></li>
                        <li><a href="/constelaciones">Constelaciones</a></li>
                        <li><a href="/talleres">Talleres</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </nav>
      </React.Fragment>
    );
  }
}

export default TopNav;
