//import { useState } from 'react'
import {Route, Routes} from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Courses from './pages/Courses'
import Home from './pages/Home'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
