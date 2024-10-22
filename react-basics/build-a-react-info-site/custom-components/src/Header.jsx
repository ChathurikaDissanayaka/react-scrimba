import reactLogo from "./assets/react-logo.png"
import "./Header.css"

function Header(){
    return (
      <header>
          <nav className="nav">
            <img src={reactLogo} className="img" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
}

export default Header