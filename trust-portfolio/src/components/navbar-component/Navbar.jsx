import React, {useState} from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react';
import "./navbar-styles.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(prev => !prev)
  };

  function closeMenu(){
    setIsOpen(false);
  }


  return (
    <nav className='navbar'>
      <a href="#Home" className='logo'><img src="logo.png" alt="Trusted Ideas" /></a>

      <div onClick={toggleMenu} className='menu-icon'> {isOpen ? 'X' : '☰'}</div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className='nav-centre-group'>
          <a href="#Home" onClick={closeMenu} >home</a>
          <a href="#About" onClick={closeMenu} >about</a>
          <a href="#Skills" onClick={closeMenu} >skills</a>
          <a href="#Experience" onClick={closeMenu} >experience</a>
        </li>
        <li><a href="https://github.com/Trust447" target="_blank" rel="noopener noreferrer">
                <Github size={20} /></a>
        </li>
        <li>
          <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noopener noreferrer">
                <Linkedin  size={20}/></a>
        </li>
        <li><a href="#Contact" className='contact-btn'> contact Me</a></li>
      </ul>

    </nav>
  )
}

export default Navbar