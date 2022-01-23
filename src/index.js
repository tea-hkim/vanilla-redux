import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return;
  }
};

const store = createStore(reducer);

const deleteBtn = ({ target }) => {
  const ID = parseInt(target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id: ID });
};

const createToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "delete";
    btn.addEventListener("click", deleteBtn);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const ID = Date.now();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo, id: ID });
};

store.subscribe(() => {
  createToDo();
  console.log(store.getState());
});

form.addEventListener("submit", handleSubmit);
