import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
    </div>
  );
};

export default Footer;
