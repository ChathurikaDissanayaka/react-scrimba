/* eslint-disable react/prop-types */
 
import star from '../assets/images/star.png'
import '../index.css'

const Card = (props) => {
  return (
    <div className="card">
  <img src={props.img} className="card-image" alt="Main card image." />
        <div className="card-stats">
            <img src={star} className="card-star" alt="Star icon." />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
        </div>
        <h2>{props.title}</h2>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/