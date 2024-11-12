/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";
const Card = ({ location }) => {
  return (
    <div className="card">
      <img src={location.imageUrl} />

      <div className="content">
        <div className="location">
          <IoLocationSharp className="location-icon" />{" "}
          <h3>{location.location.toUpperCase()}</h3>
        </div>
        <h2>{location.title}</h2>
        <h4>{location.startDate}-{location.endDate}</h4>
        <p>{location.description}</p>
      </div>
    </div>
  );
};

export default Card;
