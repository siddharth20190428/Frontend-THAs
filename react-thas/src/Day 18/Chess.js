import React from "react";
import "./Chess.css";

const Chess = () => {
  const addBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let style = { background: "#fff" };
        if (i % 2 === j % 2) {
          style.background = "#000";
        }
        boxes.push(<div className="box" style={style}></div>);
      }
    }
    return boxes;
  };
  return (
    <div className="out">
      <div className="board">{addBoxes()}</div>
    </div>
  );
};

export default Chess;
