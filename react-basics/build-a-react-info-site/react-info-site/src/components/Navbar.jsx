import '../App.css'
import logo from '../assets/react-logo.png'
function Navbar(){
    return(
        <div className='navbar'>   
            <div className='brand'>
                <img src={logo} className='logo' />
                <h3>ReactFacts</h3>
            </div>     
            <h4>React Course - Project 1</h4>
        </div>
    )
}

export default Navbar