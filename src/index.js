import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
//settings

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//dispatch
const addTodo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
//* *//
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDelteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

//paintTodos

const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "DELETE";
    delbtn.addEventListener("click", dispatchDelteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(delbtn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodos);

const onSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);
};

form.addEventListener("submit", onSubmit);
