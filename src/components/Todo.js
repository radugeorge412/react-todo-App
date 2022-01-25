import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";

export default function Todo({ text, setTodos, todos, todo }) {
  const deleteHandler = () => {
    const newState = todos.filter((item) => item.id !== todo.id);
    setTodos([...newState]);
  };

  const doneHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo-row ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{text}</li>
      <div className="icons">
        <MdDoneOutline className="done-icon" onClick={doneHandler} />
        <RiCloseCircleLine className="delete-icon" onClick={deleteHandler} />
      </div>
    </div>
  );
}
