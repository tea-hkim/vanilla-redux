import React, { useState } from "react";
import { connect } from "react-redux";
import RenderToDo from "../components/RenderToDo";
import { add } from "./../store";
import styled from "styled-components";

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

  return (
    <>
      <Title>To Do List</Title>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos?.map((toDo) => (
          <RenderToDo {...toDo} key={toDo.id} />
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
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Title = styled.h1`
  font-size: 48px;
`;
