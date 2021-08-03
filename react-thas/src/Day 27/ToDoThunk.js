import React from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import "./Todo.css";

const ToDoThunk = () => {
  return (
    <div className="center-page todo">
      <h1>To Do List</h1>
      <AddTodo />
      <List />
    </div>
  );
};

export default ToDoThunk;
