import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App

