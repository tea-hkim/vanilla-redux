import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text: text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const actionCreater = {
  addToDo,
  deleteToDo,
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const addToDoList = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem("toDoList", JSON.stringify(addToDoList));
      return addToDoList;
    case DELETE:
      const deleteToDoList = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem("toDoList", JSON.stringify(deleteToDoList));
      return deleteToDoList;
    default:
      const toDoList = JSON.parse(localStorage.getItem("toDoList"));
      if (toDoList) {
        return toDoList;
      }
      return state;
  }
};

const store = createStore(reducer);

export default store;
