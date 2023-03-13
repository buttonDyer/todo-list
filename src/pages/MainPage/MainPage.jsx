import React, { useState } from 'react'
import { useSnackbar } from 'notistack'

import Header from '../../components/Header'
import TodoCreator from '../../components/TodoCreator'
import TodoGrid from '../../components/TodoGrid/TodoGrid'
import { useSelector } from 'react-redux'

import s from './MainPage.module.scss'

function MainPage() {
  const { todos } = useSelector((state) => state.todos)

  return (
    <div>
      <Header />
      <div className={s.workSpace}>
        <TodoCreator />
        <TodoGrid todos={todos} />
      </div>
    </div>
  )
}

export default MainPage
