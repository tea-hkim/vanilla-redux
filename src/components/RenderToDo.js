import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "./../store";

function RenderToDo({ text, id, handleDeleteBtn }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={handleDeleteBtn} name={id}>
        Delete
      </button>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleDeleteBtn: () => dispatch(remove(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(RenderToDo);
