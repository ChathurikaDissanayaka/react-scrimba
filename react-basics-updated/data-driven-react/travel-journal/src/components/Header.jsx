import globe from "../assets/globe.png";
const Header = () => {
  return (
    <header>
      <img className="logo" src={globe} alt="globe logo" />
      <h1>my travel journal.</h1>
    </header>
  );
};

export default Header;
