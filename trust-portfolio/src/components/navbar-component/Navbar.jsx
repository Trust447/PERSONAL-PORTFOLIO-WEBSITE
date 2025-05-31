import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import "./navbar-styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <Link to="/" className='logo'>
          <img src="logo.svg" alt="Trusted Ideas" />
        </Link>
      </div>

      {/* Combined mobile menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>home</Link></li>
          <li><Link to="/About" onClick={closeMenu}>about</Link></li>
          <li><Link to="/Project" onClick={closeMenu}>skills</Link></li>
        </ul>
        <ul className="right-links">
          <li>
            <a href="https://github.com/Trust447" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </li>
          <li><Link to="/Contact" className='contact-btn' onClick={closeMenu}>contact Me</Link></li>
        </ul>
      </div>

      {/* Desktop links */}
      <div className="navbar-center desktop-only">
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>home</Link></li>
          <li><Link to="/About" onClick={closeMenu}>about</Link></li>
          <li><Link to="/Project" onClick={closeMenu}>skills</Link></li>
        </ul>
      </div>

      <div className="navbar-right desktop-only">
        <ul className="right-links">
          <li>
            <a href="https://github.com/Trust447" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </li>
          <li><Link to="/Contact" className='contact-btn'>contact Me</Link></li>
        </ul>
      </div>

      <div onClick={toggleMenu} className='menu-icon'>
        <span style={{ color: '#1e90ff', fontSize: '28px', cursor: 'pointer' }}>
          {isOpen ? '✕' : '☰'}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
