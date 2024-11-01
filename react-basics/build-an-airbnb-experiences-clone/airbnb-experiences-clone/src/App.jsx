import './App.css'
import Card from './components/Card'
// import Hero from './components/Hero'
import Navbar from './components/Navbar'
import katie from './assets/images/katie-zaferes.png'

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Card
        img={katie}
        rating="5.0"
        reviewCount={6}
        country="SL"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}

export default App