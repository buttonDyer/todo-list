import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'

import Router from './Router'

import { store } from './store'

import './styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </Provider>
  )
}

export default App
