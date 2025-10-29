import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Consultar from './Components/Consultar';
function App() {
  

  return (
    <Router>
      <nav>
        <Link to="/">Inicio Sesión</Link> 
        <Link to="/Register">Registrese Aquí</Link> 
        <Link to="/Consultar">Consumir API</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Register" element={<RegisterForm/>}/>
        <Route path="/Consultar" element={<Consultar/>}/>
      </Routes>
    </Router>
  )
}

export default App
