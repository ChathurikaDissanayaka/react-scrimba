import trollFace from "../assets/troll-face.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={trollFace} alt="troll-face" />
      <h1>Meme Generator</h1>
    </div>
  );
};

export default Header;
