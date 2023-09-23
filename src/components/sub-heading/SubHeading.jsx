import { images } from "../../constants";

const SubHeading = ({ title }) => {
  return (
    <div className="sub-heading-container">
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__image" />
    </div>
  );
};

export default SubHeading;
