import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import History from './Pages/History'
import About from './Pages/About'
import Setting from './Components/Setting'
import PasswordContext from './Context/PasswordContext'

import './index.css'

const App = () => {
  return (
    <div>
       <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/History" element={<History/>} />

      </Routes>
    </div>
  )
}

export default App
