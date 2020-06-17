import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./styles/TopNav.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Navbar className=" footer px-5 " collapseOnSelect expand="lg" variant="dark" fixed="bottom">
          <a className="social" href="https://www.facebook.com/bettybarretopage" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <span>@bettybarretopage</span>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;
