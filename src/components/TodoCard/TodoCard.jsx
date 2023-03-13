import React from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'

import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'

import { checkTodo, moveToTrash } from '../../store/todosSlice'

import s from './TodoCard.module.scss'

function TodoCard({ todo }) {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const onCheck = () => {
    dispatch(checkTodo({ id: todo.id }))

    enqueueSnackbar({
      variant: 'success',
      message: 'Задачка была успешно выполнена',
    })
  }

  const onDelete = () => {
    dispatch(moveToTrash({ id: todo.id }))
    enqueueSnackbar({
      variant: 'success',
      message: 'Задачка была успешно выполнена',
    })
  }

  return (
    <div className={`${s.todoCard} ${todo.checked ? s.checked : ''}`}>
      <div className={s.title}>{todo.title}</div>
      <div className={s.note}>{todo.note}</div>
      <div className={s.controlPart}>
        <div className={s.buttons}>
          <button type="button" onClick={onCheck} className={s.button}>
            <CheckIcon />
          </button>
          <button type="button" onClick={onDelete} className={s.button}>
            <DeleteIcon />
          </button>
        </div>
        <div className={s.date}>{todo.dateCreation}</div>
      </div>
    </div>
  )
}

export default TodoCard
