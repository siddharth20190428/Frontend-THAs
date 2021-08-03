import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions";

const List = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo_item">
          <h5 style={{ display: "inline-block" }}>{todo.title}</h5>
          <button onClick={() => dispatch(removeItem(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
