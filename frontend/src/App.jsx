import React from 'react'
import Home from './Pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext';



const App = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <div className="bg-slate-950 h-[100vh] overflow-hidden">
          <Routes>
            <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
            <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
            <Route path='/register' element={authUser ? <Navigate to="/" /> : <Register />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
