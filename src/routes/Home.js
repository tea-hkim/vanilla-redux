import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "./../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo(text);
    setText("");
  };

  const handleDelete = (event) => {
    const {
      target: { name },
    } = event;
    // const newToDos = toDos.filter((todo) => todo.id !== parseInt(name));
    // setToDos(newToDos);
  };

  return (
    <>
      <h1>To Do</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos?.map((toDo) => (
          <li key={toDo.id}>
            {toDo.text}
            <button onClick={handleDelete} name={toDo.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreater.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
