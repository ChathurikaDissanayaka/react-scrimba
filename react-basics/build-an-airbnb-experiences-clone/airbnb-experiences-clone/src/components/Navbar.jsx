import '../App.css'
import logo from '../assets/images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav className='nav'>
      <img src={logo} alt="AirBnb logo" className="logo" />
    </nav>
  )
}

export default Navbar