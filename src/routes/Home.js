import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now(),
      text,
    };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
    setText("");
  };

  const handleDelete = (event) => {
    const {
      target: { name },
    } = event;
    const newToDos = toDos.filter((todo) => todo.id !== parseInt(name));
    setToDos(newToDos);
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

export default Home;
