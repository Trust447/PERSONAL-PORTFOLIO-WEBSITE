import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Github, Linkedin} from 'lucide-react';
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
      <Link to="/" className='logo'><img src="logo.png" alt="Trusted Ideas" /></Link>

      <div onClick={toggleMenu} className='menu-icon'> {isOpen ? 'X' : '☰'}</div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className='nav-centre-group'>
          <Link to="/" onClick={closeMenu} >home</Link>
          <Link to="/About" onClick={closeMenu} >about</Link>
          <Link to="/Project" onClick={closeMenu} >skills</Link>
        </li>
        <li><a href="https://github.com/Trust447" target="_blank" rel="noopener noreferrer">
                <Github size={20} /></a>
        </li>
        <li>
          <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noopener noreferrer">
                <Linkedin  size={20}/></a>
        </li>
        <li><Link to="/Contact" className='contact-btn'> contact Me</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar