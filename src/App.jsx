import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App

