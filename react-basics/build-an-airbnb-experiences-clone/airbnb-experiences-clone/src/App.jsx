/* eslint-disable react/jsx-key */
import "./App.css";
// import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import data from "./data/data";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {cards}
    </>
  );
}

export default App;
