import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import "./navbar-styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}`}>
      {/* Your navbar JSX unchanged */}
      <div className="navbar-left">
        <a href="#home" className='logo' onClick={closeMenu}>
          <img src="logo.svg" alt="Trusted Ideas" />
        </a>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={closeMenu}>home</a></li>
          <li><a href="#about" onClick={closeMenu}>about</a></li>
          <li><a href="#project" onClick={closeMenu}>skills</a></li>
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
          <li><a href="#contact" className='contact-btn' onClick={closeMenu}>contact Me</a></li>
        </ul>
      </div>

      {/* Desktop links */}
      <div className="navbar-center desktop-only">
        <ul className="nav-links">
          <li><a href="#home" onClick={closeMenu}>home</a></li>
          <li><a href="#about" onClick={closeMenu}>about</a></li>
          <li><a href="#project" onClick={closeMenu}>skills</a></li>
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
          <li><a href="#contact" className='contact-btn'>contact Me</a></li>
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
