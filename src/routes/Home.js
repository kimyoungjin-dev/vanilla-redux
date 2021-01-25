import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <h1></h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Your ToDo"
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="todo" />
      </form>
      <ul>
        {todos.map((todo) => (
          <ToDo {...todo} />
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// mapStateToProps redux state 로부터 home 에 props를 전달해준다.
//connect는 stated에서 home으로 보내는 props 에 추가될수있도록 허용해준다.
