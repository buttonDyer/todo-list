import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  trash: JSON.parse(localStorage.getItem('todos') || '[]'),
}

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const { title, note } = action.payload // здесь мы достаем данные отправленные в dispatch
      state.todos.push({
        id: `${Date.now()} ${title}`,
        title,
        note,
        dateCreation: new Date().toLocaleDateString(),
        checked: false,
      }) // Добавляем напрямую новую задачу в хранилище
      localStorage.setItem('todos', JSON.stringify(state.todos)) // сохраняем в localStorage
    },
    checkTodo(state, action) {
      const { id } = action.payload // здесь мы достаем данные отправленные в dispatch
      state.todos = state.todos.map((elem) => {
        if (elem.id === id) {
          return { ...elem, checked: !elem.checked }
        }
        return elem
      }) // ищем и изменяем конкретный элемент в массиве todos
      localStorage.setItem('todos', JSON.stringify(state.todos)) // сохраняем в localStorage
    },
    moveToTrash(state, action) {
      const { id } = action.payload
      state.todos = state.todos.filter((elem) => {
        if (elem.id === id) {
          state.trash.push(elem)
          return false
        }
        return true
      })
      localStorage.setItem('todos', JSON.stringify(state.todos)) // сохраняем в localStorage
      localStorage.setItem('trash', JSON.stringify(state.todos)) // сохраняем в localStorage
    },
    editTodo(state, action) {
      const { id, title, note } = action.payload
      state.todos = state.todos.map((elem) => {
        if (elem.id === id) {
          return { ...elem, title, note }
        }
        return elem
      })
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
})

export const { addTodo, checkTodo, moveToTrash, editTodo } = TodosSlice.actions

export default TodosSlice.reducer
