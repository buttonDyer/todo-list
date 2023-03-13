import React from 'react'
import TodoCard from '../TodoCard'

import s from './TodoGrid.module.scss'

function TodoGrid({ todos }) {
  return (
    <div className={s.grid}>
      {todos.map((elem) => (
        <TodoCard key={elem.id} todo={elem} />
      ))}
    </div>
  )
}

export default TodoGrid
