import React from "react";
import TodoCard from "../TodoCard";

import s from "./TodoGrid.module.scss";

function TodoGrid({ todos, checkTodo }) {
  return (
    <div className={s.grid}>
      {todos.map((elem) => (
        <TodoCard key={elem.id} todo={elem} checkTodo={checkTodo} />
      ))}
    </div>
  );
}

export default TodoGrid;
