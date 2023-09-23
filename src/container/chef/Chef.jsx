import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div
      className="app__background app__wrapper section__padding"
      id="about-chef"
    >
      <div className="app__wrapper_image app__wrapper_image-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="head-text__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans" style={{ textTransform: "none" }}>
              Our cuisine embodies passion, tradition, innovation.
            </p>
          </div>
          <p className="p__opensans" style={{ textTransform: "none" }}>
            We believe that food is not just fuel, but an art that blends
            flavors, tradition, and culture. We believe in creating culinary
            experiences that will awaken your senses and leave an indelible mark
            on your memory.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
