import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menu-item">
      <div className="app__menu-item-head">
        <div className="app__menu-item-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menu-item-price_container">
          <div className="app__menu-item-dash" />
          <div className="app__menu-item-price">
            <p className="p__cormorant">{price}</p>
          </div>
        </div>
      </div>
      <div className="app__menu-utem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
