import { React, useEffect, useState } from 'react'

import Header from '../Header'

import s from './TrashComponent.module.scss'

function TrashComponent() {
  const [trash, setTrash] = useState([])

  useEffect(() => {
    const trashFromLocalStorage = JSON.parse(
      localStorage.getItem('trash') || '[]'
    )
    setTrash(trashFromLocalStorage)
  }, [])

  return (
    <>
      <Header />
      <div className={s.trashComponent}>
        <div className={s.mainTitle}>Deleted Todos</div>
        <div className={s.grid}>
          {trash.map((todo) => (
            <div className={s.card} key={todo.id}>
              <p className={s.title}>{todo.title}</p>
              <p className={s.note}>{todo.note}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TrashComponent
