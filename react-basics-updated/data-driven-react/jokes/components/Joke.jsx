const Joke = (props) => {
  return (
    <div className="joke">
      {props.setup && <p className="setup">{props.setup}</p>}
      <p className="punchline">{props.punchline}</p>
    </div>
  );
};

export default Joke;
