import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data/data";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
