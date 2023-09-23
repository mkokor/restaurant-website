import { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const galleryImages = [
  images.gallery1,
  images.gallery2,
  images.gallery3,
  images.gallery4,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    current.scrollLeft += direction === "left" ? -300 : 300;
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery_content">
        <SubHeading title="Instagram" />
        <h1 className="head-text__cormorant">Photo Gallery</h1>
        <p className="p__opensans">
          Discover our culinary delights through lavish photographs of dishes,
          ambiance, and satisfied diners.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery-image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram color="#FFF" className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
