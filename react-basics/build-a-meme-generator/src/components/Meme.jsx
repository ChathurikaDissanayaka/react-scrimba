import { useState } from "react";
import memesData from "../data/MemesData.js";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMeme = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <main>
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
        <button type="submit" onClick={getMeme}>
          Get a new meme image
        </button>
      </div>
      <img className="meme" src={memeImage} alt="" />
    </main>
  );
};

export default Meme;
