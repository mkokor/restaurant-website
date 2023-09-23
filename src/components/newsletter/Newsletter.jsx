import "./Newsletter.css";
import SubHeading from "../sub-heading/SubHeading";

const Newsletter = () => {
  return (
    <div className="app__newsletter" id="subscription">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="head-text__cormorant">Subscribe to our newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
