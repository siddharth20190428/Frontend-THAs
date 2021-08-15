import React, { useContext } from "react";
import TodosContext, { TodosContextType } from "./TodosContext";

interface TodoListProps {
  id: number;
  title: string;
  done: boolean;
}

const TodoList = ({ title, done, id }: TodoListProps) => {
  const { todos, setTodos } = useContext<TodosContextType>(TodosContext);
  return (
    <div className="todo-list">
      <h2 className={done ? "done" : ""}>{title}</h2>
      <button
        onClick={() => {
          let newTodos = [...todos];
          newTodos[id].done = !done;
          setTodos(newTodos);
        }}
      >
        done
      </button>
      <button
        onClick={() => {
          setTodos(todos.filter((todos, ind) => ind !== id));
        }}
      >
        delete
      </button>
    </div>
  );
};

export default TodoList;
