import React from 'react'
import "./App.css"
import Navbar from './components/navbar-component/Navbar'
import Home from './components/home-component/Home'
import About from './components/about-components/About'
import Skills from './components/skills-component/skills'
import Experience from './components/experience component/experience'
import Contact from './components/contact-component/contact'


const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
    </div>
  )
}

export default App