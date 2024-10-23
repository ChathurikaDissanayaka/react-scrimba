import '../App.css'
import photo from '../assets/images/photo-grid.png'

const Hero = () => {
  return (
    <section className='hero'>
        <img src={photo} alt="photo grid" className='photo-grid' />
        <h1 className='hero-title'>Online Experiences</h1>
        <p className='hero-paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero