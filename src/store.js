import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

export const actionCreater = {
  addToDo,
  deleteToDo,
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      const addToDoList = [{ text: action.payload, id: Date.now() }, ...state];
      localStorage.setItem("toDoList", JSON.stringify(addToDoList));
      return addToDoList;
    case deleteToDo.type:
      const deleteToDoList = state.filter((toDo) => toDo.id !== action.payload);
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
