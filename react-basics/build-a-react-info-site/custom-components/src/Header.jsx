import reactLogo from "./assets/react-logo.png"

function Header(){
    return (
      <header>
          <nav>
            <img src={reactLogo} width="40px" />
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