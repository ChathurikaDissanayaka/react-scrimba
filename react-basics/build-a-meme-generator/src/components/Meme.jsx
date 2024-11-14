import { useState } from "react";
import memesData from "../data/MemesData.js";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = useState(memesData)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}
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
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img className="meme" src={meme.randomImage} alt="" />
    </main>
  );
};

export default Meme;
