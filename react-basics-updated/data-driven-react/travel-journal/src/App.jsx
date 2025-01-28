import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./assets/Data";
function App() {
  return (
    <>
      <Header />
      {data.map((location) => {
        return (
          <Entry
            key={location.id}
            img={location.img}
            title={location.title}
            country={location.country}
            googleMapsLink={location.googleMapsLink}
            dates={location.dates}
            text={location.text}
          />
        );
      })}
    </>
  );
}

export default App;
