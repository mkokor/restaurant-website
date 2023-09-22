import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";
import { images } from "../../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    setToggleMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo"></img>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-subscription">
        <a href="#subscription" className="p__opensans">
          Subscribe
        </a>
        <div />
        <a href="#about-chef" className="p__opensans">
          Chef's Word
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={openMenu}
          className="app__navbar-smallscreen_button"
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={closeMenu}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={closeMenu}>
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={closeMenu}>
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
