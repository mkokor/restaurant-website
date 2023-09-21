import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app__background app__wrapper section__padding">
      <div className="app__wrapper_image app__wrapper_image-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="head-text__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
