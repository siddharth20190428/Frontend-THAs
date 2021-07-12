import React from "react";

const Chess = () => {
  const addBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let myStyle = { background: "#fff" };
        if (i % 2 === j % 2) {
          myStyle.background = "#000";
        }
        boxes.push(<div className="box" style={myStyle}></div>);
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
