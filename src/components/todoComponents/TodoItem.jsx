import React from "react";
import style from "../../styles/todoStyles/TodoItem.module.css";

function TodoItem({ todo }) {
  return (
    <div>
      <p
        className={`
          ${style.TodoItem} 
          ${todo.completed ? style.Completed : ""}`}>
        {todo.title}
      </p>
    </div>
  );
}

export default TodoItem;
