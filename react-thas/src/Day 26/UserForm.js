import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername, changeEmail } from "./actions/index";
import "./User.css";

const UserForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="center-page user">
      <form>
        <h1>Input</h1>
        <input
          type="text"
          onChange={(e) => dispatch(changeUsername(e.target.value))}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Email"
        />
      </form>

      <div className="output">
        <h1>Data</h1>
        <h4>Username: {user.username}</h4>
        <h4>Email: {user.email}</h4>
      </div>
      {/* <h3>Counter using React Redux</h3>
      <button onClick={() => dispatch(changeUsername())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(changeEmail())}>-</button> */}
    </div>
  );
};

export default UserForm;
