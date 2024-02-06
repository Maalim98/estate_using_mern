import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import About from './pages/About';

export default function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/signup' element={<SignUp />} />
  <Route path='/signin' element={<SignIn />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/About' element={<About />} />

  </Routes>
  
  
  
  </BrowserRouter>
}
