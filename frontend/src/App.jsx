import React from 'react'
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-slate-950 h-[100vh] overflow-hidden">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
