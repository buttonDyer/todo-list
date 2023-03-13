import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'

import MainPage from './pages/MainPage'

import { store } from './store'

import './styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <MainPage />
      </SnackbarProvider>
    </Provider>
  )
}

export default App
