const Meme = () => {
  return (
    <div className="form">
      <div className="inputs">
        <div className="input">
          <label htmlFor="top-text">Top text</label>
          <input
            type="text"
            name="top-text"
            id="top-text"
            placeholder="Shut up"
          />
        </div>
        <div className="input">
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            type="text"
            name="bottom-text"
            id="bottom-text"
            placeholder="And take my money"
          />
        </div>
      </div>
      <button type="submit">Get a new meme image</button>
    </div>
  );
};

export default Meme;
