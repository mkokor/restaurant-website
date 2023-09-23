import React from "react";

import "./FooterOverlay.css";

const FooterOverlay = () => {
  return (
    <div className="app__footer-overlay">
      <div className="app__footer-overlay-black" />
      <div className="app__footer-overlay-image app__background" />
    </div>
  );
};

export default FooterOverlay;
