import React from "react";
import "./MemeCard.css";

const MemeCard = () => {
  return (
    <div className="center-page">
      <div className="card">
        <div className="card-pic">
          <img src="../meme.png" alt="My meme" />
        </div>
        <h3>This is my meme card</h3>
      </div>
    </div>
  );
};

export default MemeCard;
