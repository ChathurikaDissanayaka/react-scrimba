import Joke from "./components/Joke";
import jokes from "./JokesData";

export default function App() {
  return (
    <div className="joke-container">
      <div className="inner-container">
        {jokes.map((joke) => {
          return (
            <Joke
              key={joke.setup}
              setup={joke.setup}
              punchline={joke.punchline}
            />
          );
        })}
      </div>
    </div>
  );
}
