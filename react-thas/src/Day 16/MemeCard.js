import React from "react";
import "./MemeCard.css";

const MemeCard = () => {
  return (
    <div className="card">
      <div className="card-pic">
        <img src="./meme.png" />
      </div>
      <h3>This is my meme card</h3>
    </div>
  );
};

export default MemeCard;
