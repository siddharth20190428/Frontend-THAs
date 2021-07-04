import React from "react";
import "./Chess.css";

const Chess = () => {
  const Box = () => {
    return <div className="box"></div>;
  };
  const Row = () => {
    return (
      <div className="row">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  };
  return (
    <div className="out">
      <div className="board">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default Chess;
