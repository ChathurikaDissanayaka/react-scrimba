import img from "../assets/react.svg";

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <img src={img} />
        <span>React Facts</span>
      </nav>
    </header>
  );
};

export default Nav;
