import React from "react";
import { connect } from "react-redux";

const Detail = ({ todo }) => {
  return (
    <div>
      <h1>{todo?.text}</h1>
      <h1>created at : {todo?.id}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { todo: state.find((todo) => todo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
