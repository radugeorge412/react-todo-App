import React from "react";

export default function Form({ input, setInput, todos, setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = [
      ...todos,
      { text: input, id: Math.floor(Math.random() * 100000), completed: false },
    ];
    setTodos(newState);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>What are we doing today?</h1>
      <form className="todo-form" autoComplete="off">
        <input
          type="text"
          placeholder="Add a task"
          name="text"
          className="todo-input"
          value={input}
          onChange={handleChange}
        />
        <button className="todo-button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}
