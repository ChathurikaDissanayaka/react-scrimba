/* eslint-disable react/prop-types */
import PhoneIcon from "../assets/phone-icon.png";
import MailIcon from "../assets/mail-icon.png";

const Contact = (props) => {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={PhoneIcon} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={MailIcon} />
        <p>{props.email}</p>
      </div>
    </div>
  );
};

// const Contact = ({img, name, phone, email}) => {
//   return (
//     <div className="contact-card">
//       <img src={img} />
//       <h3>{name}</h3>
//       <div className="info-group">
//         <img src={PhoneIcon} />
//         <p>{phone}</p>
//       </div>
//       <div className="info-group">
//         <img src={MailIcon} />
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// };

export default Contact;
