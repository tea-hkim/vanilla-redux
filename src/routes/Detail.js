import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreater } from "./../store";

function Detail({ toDos, handleDeleteBtn }) {
  const id = parseInt(useParams().id);
  const navigate = useNavigate();
  const toDo = toDos.find((toDo) => toDo.id === id);

  const handleClick = () => {
    handleDeleteBtn(id);
    navigate("/");
  };
  return (
    <div>
      <h1>해야할 일</h1>
      {toDo ? (
        <>
          <p>{toDo.text}</p>
          <button onClick={handleClick}>DELETE</button>
        </>
      ) : null}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    handleDeleteBtn: (id) => dispatch(actionCreater.deleteToDo(id)),
  };
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
