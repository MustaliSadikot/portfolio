import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {

  // window.document.title = "Come back"
    // window.document.onfocus((e)=>{

    //   window.document.title = "Portfolio"
    // })
  return (
    <>
    <div className='select-none'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
