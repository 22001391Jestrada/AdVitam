import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Us from './pages/Us'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='Nosotros' element={<Us />} />
            <Route path='Login' element={<Login />} />
            <Route path='Logout' element={<Logout />} />
            <Route path='Contactanos' element={<Contact />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='404' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
