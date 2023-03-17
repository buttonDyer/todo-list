import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { addTodo } from '../../store/todosSlice'

import s from './TodoCreator.module.scss'

function TodoCreator() {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const onNoteChange = (e) => {
    setNote(e.target.value)
  }

  const onSubmitLocal = (e) => {
    e.preventDefault()

    dispatch(addTodo({ title, note }))

    enqueueSnackbar({
      variant: 'success',
      message: 'Task created',
    })
  }

  return (
    <form onSubmit={onSubmitLocal} className={s.formWrapper}>
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        value={title}
        onChange={onTitleChange}
      />
      <TextField
        id="outlined-basic"
        label="Your note"
        variant="outlined"
        value={note}
        onChange={onNoteChange}
      />
      <Button type="submit" className={s.formButton} variant="contained">
        Save
      </Button>
    </form>
  )
}

export default TodoCreator
