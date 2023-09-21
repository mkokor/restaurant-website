import React from "react";

import "./SpecialMenu.css";
import { data, images } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <div className="app__special-menu flex__center section__padding" id="menu">
      <div className="app__special-menu-title">
        <SubHeading title="menu that fits you palatte" />
        <h1 className="head-text__cormorant">Today's Special</h1>
      </div>
      <div className="app__special-menu-content flex__center">
        <div className="app__special-menu-content_wine flex__center">
          <p className="app__special-menu-content_heading">Wine & Beer</p>
          <div className="app__special-menu-content_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__special-menu-content_image">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__special-menu-content_cocktails flex__center">
          <p className="app__special-menu-content_heading">Cocktails</p>
          <div className="app__special-menu-content_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
