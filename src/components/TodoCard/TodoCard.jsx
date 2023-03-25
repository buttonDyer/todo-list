import React from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import { checkTodo, moveToTrash, editTodo } from '../../store/todosSlice'

import s from './TodoCard.module.scss'

function TodoCard({ todo }) {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const [title, setTitle] = useState(todo.title)
  const [note, setNote] = useState(todo.note)
  const [isEditable, setIsEditable] = useState(false)

  const onCheck = () => {
    dispatch(checkTodo({ id: todo.id }))

    enqueueSnackbar({
      variant: 'info',
      message: 'Task status changed',
    })
  }

  const onDelete = () => {
    dispatch(moveToTrash({ id: todo.id }))
    enqueueSnackbar({
      variant: 'error ',
      message: 'Task deleted',
    })
  }

  const onSave = () => {
    dispatch(
      editTodo({
        id: todo.id,
        title,
        note,
      })
    )
    setIsEditable(false)
    enqueueSnackbar({
      variant: 'success',
      message: 'Edits saved',
    })
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.textContent)
  }

  const handleNoteChange = (event) => {
    setNote(event.target.textContent)
  }

  return (
    <div className={`${s.todoCard} ${todo.checked ? s.checked : ''}`}>
      <div
        contentEditable={isEditable}
        onInput={handleTitleChange}
        className={s.title}
      >
        {todo.title}
      </div>
      <div
        className={s.note}
        contentEditable={isEditable}
        onInput={handleNoteChange}
      >
        {todo.note}
      </div>
      <div className={s.controlPart}>
        <div className={s.buttons}>
          <button type="button" onClick={onCheck} className={s.button}>
            <CheckIcon />
          </button>
          <button type="button" onClick={onDelete} className={s.button}>
            <DeleteIcon />
          </button>
          {isEditable ? (
            <>
              <button type="button" onClick={onSave} className={s.button}>
                <SaveIcon />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditable(true)}
              className={s.button}
            >
              <EditIcon />
            </button>
          )}
        </div>
        <div className={s.date}>{todo.dateCreation}</div>
      </div>
    </div>
  )
}

export default TodoCard
