import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => {
  return (
    <div
      className="app__about-us app__background flex__center section__padding"
      id="about"
    >
      <div className="app__about-us-overlay flex__center">
        <img src={images.logoLetter} alt="logo letter" />
      </div>
      <div className="app__about-us-content flex__center">
        <div className="app__about-us-content_about">
          <h1 className="head-text__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Our restaurant is where taste meets elegance, creating a unique
            experience for all lovers of good food. Located in the heart of the
            city, we proudly showcase our passion for gastronomy for years.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__about-us-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>

        <div className="app__about-us-content_history">
          <h1 className="head-text__cormorant">History</h1>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Nestled in the heart of the city, we have spent years passionately
            crafting our culinary narrative, a captivating tale interwoven with
            time-honored traditions and cutting-edge innovations.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
