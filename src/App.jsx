import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Hero'
import LotStatus from './pages/LotStatusPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/lot-status"
          element={<LotStatus />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
