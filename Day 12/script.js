let todos = [];

let todoInput;
let addButton = document.querySelector(".add");
let todosEl = document.querySelector(".todos");

function addTodo() {
  todoInput = document.querySelector(".input-text");
  todos.push(todoInput.value);
  showTodos(todoInput.value);
  todoInput.value = "";
}

function showTodos(todo) {
  let todoEl = document.createElement("li");

  //   Delete button
  let delEl = document.createElement("button");
  delEl.classList.add("delete");
  delEl.innerText = "-";
  delEl.addEventListener("click", (e) => {
    todosEl.removeChild(e.path[1]);
    todos = todos.filter((old) => {
      return old !== todo;
    });
  });

  //   Todo text
  let todoText = document.createElement("p");
  todoText.classList.add("todo-text");
  todoText.innerText = todo;

  //   Appending all elements
  todoEl.appendChild(delEl);
  todoEl.appendChild(todoText);
  todosEl.appendChild(todoEl);
}

todos.forEach((todo) => showTodos(todo));
addButton.addEventListener("click", addTodo);
