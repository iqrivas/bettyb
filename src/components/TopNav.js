import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import "./styles/TopNav.css";

class TopNav extends React.Component {
  render() {
    return (
          <div class="navigation">
                <nav class="pre-nav">
                    <a href="index.html" class="logo">
                        <FontAwesomeIcon icon={faSpa} size="1x" />
                        &nbsp;Betty Barreto
                    </a>
                </nav>
                <nav>
                    <ul>
                        <li><a href="/" class="active">Inicio</a></li>
                        <li><a href="/meditaciones">Meditaciones</a></li>
                        <li><a href="/talleres">Talleres</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </nav>
          </div>
    );
  }
}

export default TopNav;
