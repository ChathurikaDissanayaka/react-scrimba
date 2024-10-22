import '../App.css'
import twitterLogo from '../assets/twitter-logo.png'
import facebookLogo from '../assets/facebook-logo.png'
import instaLogo from '../assets/insta-logo.png'
import githubLogo from '../assets/github-logo.png'

function Footer() {
  return (
    <div className="footer">
      <img src={twitterLogo} alt="twitter logo" />
      <img src={facebookLogo} alt="facebook logo" />
      <img src={instaLogo} alt="insta logo" />
      <img src={githubLogo} alt="GitHub logo" />
    </div>
  )
}

export default Footer;
