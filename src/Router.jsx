import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import TrashPage from './pages/TrashPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
