/* eslint-disable react/prop-types */
import location from "../assets/location.png";
const Entry = (props) => {
  return (
    <article className="card">
      <div className="location-image-container">
        <img className="location-img" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info">
        <div className="location">
          <img src={location} alt="location logo" />
          <p className="uppercase">{props.country}</p>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <h3>{props.dates}</h3>
        <p>{props.text}</p>
      </div>
    </article>
  );
};

export default Entry;
