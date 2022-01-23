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

const addToDo = (text) => {
  const ID = Date.now();
  return { type: ADD_TODO, text, id: ID };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const dispatchDeleteToDo = ({ target }) => {
  const ID = parseInt(target.parentNode.id);
  store.dispatch(deleteToDo(ID));
};

const dispatchAddToDo = (toDo) => {
  store.dispatch(addToDo(toDo));
};

const createToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "delete";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(() => {
  createToDo();
});

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", handleSubmit);
