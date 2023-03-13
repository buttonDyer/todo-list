import React, { useState } from 'react'
import { useSnackbar } from 'notistack'

import Header from '../../components/Header'
import TodoCreator from '../../components/TodoCreator'
import TodoGrid from '../../components/TodoGrid/TodoGrid'

import s from './MainPage.module.scss'

function MainPage() {
  const { enqueueSnackbar } = useSnackbar()
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  )

  const addTodo = (newTodo) => {
    setTodos((prev) => {
      const newTodos = [...prev, newTodo]

      localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
    enqueueSnackbar({
      variant: 'success',
      message: 'Задачка была успешно создана',
    })
  }

  const checkTodo = (id) => {
    setTodos((prev) => {
      // вызов ф-ции изменения state + получение предыдущего состояния
      const newTodos = prev.map((elem) => {
        // пересобирание массива
        if (elem.id === id) {
          // если это искомый элемент
          return { ...elem, checked: !elem.checked } // изменяем свойство checked
        }
        return elem // если нет, то возвращаем такой, какой он и был
      })
      return newTodos // применяем в state новый пересобранный массив
    })
    enqueueSnackbar({
      variant: 'success',
      message: 'Задачка была успешно выполнена',
    })
  }

  return (
    <div>
      <Header />
      <div className={s.workSpace}>
        <TodoCreator onSubmit={addTodo} />
        <TodoGrid todos={todos} checkTodo={checkTodo} />
      </div>
    </div>
  )
}

export default MainPage
