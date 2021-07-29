import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="center-page">
      <h3>Counter using React Redux</h3>
      <button onClick={() => dispatch(incNumber())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decNumber())}>-</button>
    </div>
  );
};

export default Counter;
