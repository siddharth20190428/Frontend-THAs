import React from "react";

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
    <div className="center-page">
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
    </div>
  );
};

export default Chess;
