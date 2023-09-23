import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading, AwardCard } from "../../components";

const Laurels = () => {
  return (
    <div className="app__background app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title={"Awards & recognition"} />
        <h1 className="head-text__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_image">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
