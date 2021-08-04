import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/index";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle_theme">
      <button
        className={`btn ${theme ? "btn-light" : "btn-dark"}`}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ToggleTheme;
