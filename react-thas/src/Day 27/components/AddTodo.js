import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodo } from "../actions/index";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add a todo"
        />
        <button
          onClick={() => {
            setItem("");
            dispatch(
              addItem({
                title: item,
                done: false,
              })
            );
          }}
        >
          Add
        </button>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={() => {
            dispatch(loadTodo());
          }}
        >
          Load Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
