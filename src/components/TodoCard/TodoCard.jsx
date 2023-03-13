import React from "react";
import CheckIcon from "@mui/icons-material/Check";

import s from "./TodoCard.module.scss";

function TodoCard({ todo, checkTodo }) {
  return (
    <div className={`${s.todoCard} ${todo.checked ? s.checked : ""}`}>
      <div className={s.title}>{todo.title}</div>
      <div className={s.note}>{todo.note}</div>
      <div className={s.controlPart}>
        <div className={s.buttons}>
          <button
            type="button"
            onClick={() => checkTodo(todo.id)}
            className={s.button}
          >
            <CheckIcon />
          </button>
        </div>
        <div className={s.date}>{todo.dateCreation}</div>
      </div>
    </div>
  );
}

export default TodoCard;
