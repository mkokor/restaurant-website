import "./AwardCard.css";

const AwardCard = ({ award: { imageUrl, title, subTitle } }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={imageUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__cormorant">{subTitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
