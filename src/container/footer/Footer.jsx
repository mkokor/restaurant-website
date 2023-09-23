import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-head-text">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="logo" />
          <p
            className="p__opensans flex__center"
            style={{ textTransform: "none" }}
          >
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img
            className="spoon__image"
            src={images.spoon}
            alt="spoon"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-head-text">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 Am - 12:00 Am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 Am - 11:00 Am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
