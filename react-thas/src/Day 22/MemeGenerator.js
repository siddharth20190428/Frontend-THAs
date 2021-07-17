import React, { useEffect, useState } from "react";
import Meme from "./Meme";
import "./Meme.css";
import Templates from "./Templates";

const MemeGenerator = () => {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);

  return (
    <div className="meme-page">
      <h1>Meme Generator</h1>
      {!meme ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
};

export default MemeGenerator;
