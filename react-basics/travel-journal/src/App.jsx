import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";
import data from "./data/Data.js"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      {data.map((location) => {
        return <Card key={location.id} location={location}/>
      })}
</div>
      
    </>
  );
}

export default App;
