/* eslint-disable react/prop-types */
import "../index.css";

const Card = ({item}) => {
  let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
    
  return (
    <div className="card">
      <img
        src={`./images/${item.coverImg}`}
        className="card-image"
        alt="Main card image."
      />
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="card-stats">
        <img src="./images/star.png" className="card-star" alt="Star icon." />
        <span>{item.stats.rating}</span>
        <span className="gray">({item.stats.reviewCount}) • </span>
        <span className="gray">{item.location}</span>
      </div>
      <h2>{item.title}</h2>
      <p>
        <span className="bold">From ${item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;

/*
Challenge: Pass item to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
