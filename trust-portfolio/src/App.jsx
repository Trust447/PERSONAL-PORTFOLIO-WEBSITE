import React from 'react'
import "./App.css"
import Navbar from './components/navbar-component/Navbar'
import Home from './components/home-component/Home'
import About from './components/about-components/About'
import Skills from './components/skills-component/Skills'
import Experience from './components/experience component/Experience'
import Contact from './components/contact-component/Contact'
import Footer from './components/footer-component/Footer'


const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
    </div>
  )
}

export default App