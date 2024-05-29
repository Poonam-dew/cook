import React from 'react';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
const Footer=()=>{
  return(
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon={faYoutube} size="3x" color="white" />
        <FontAwesomeIcon icon={faFacebook} size="3x" color="white"/>
        <FontAwesomeIcon icon={faTwitter} size="3x" color="white"/>
        <FontAwesomeIcon icon={faInstagram} size="3x" color="white"/>
      </div>
      <p> © 2024 MasterChef.com</p>
      
    </div>
    )
}
export default Footer;