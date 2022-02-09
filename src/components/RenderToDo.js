import React from "react";
import { connect } from "react-redux";
import { actionCreater } from "./../store";

function RenderToDo({ text, id, handleDeleteBtn }) {
  return (
    <li>
      {text}
      <button onClick={handleDeleteBtn} name={id}>
        Delete
      </button>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    handleDeleteBtn: () => dispatch(actionCreater.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(RenderToDo);
