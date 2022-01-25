import React from "react";
import Todo from "./Todo";

export default function List({ todos, setTodos }) {
  return (
    <div className="todoContainer">
      <ul className="todoList">
        {todos.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            setTodos={setTodos}
            todos={todos}
            todo={item}
          />
        ))}
      </ul>
    </div>
  );
}
