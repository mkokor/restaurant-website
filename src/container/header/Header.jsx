import React from "react";

import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={"Chase the new flavour"} />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans app__header_info">
          Welcome to a place where food is transformed into art, and every meal
          becomes a story, as our kitchen combines passion and perfection,
          offering you a unique opportunity to dive into a palate of pleasure.
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_image">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
