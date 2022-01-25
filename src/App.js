import Form from "components/Form";
import List from "components/List";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  let initialState;
  if (localStorage.getItem("todos") === null) {
    initialState = [];
  } else {
    initialState = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-app">
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
