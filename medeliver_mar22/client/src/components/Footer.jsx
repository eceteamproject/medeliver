import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>COEN6311_Team9 Copyright©2022</p>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </footer>
    </div>
  );
}

export default Footer;
