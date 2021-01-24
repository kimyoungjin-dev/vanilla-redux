import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
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
      <ul></ul>
    </div>
  );
};

export default Home;
