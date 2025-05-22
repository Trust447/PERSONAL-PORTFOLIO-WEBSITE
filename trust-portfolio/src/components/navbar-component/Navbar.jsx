import React, { useState } from 'react';
import { NavbarMenu } from './navbar-data';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#Home');

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" aria-label="Homepage">
        <a href="#Home"><h3>T</h3></a>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              onClick={() => handleLinkClick(item.link)}
              className={activeLink === item.link ? 'active-link' : ''}
            >
              {item.title}
            </a>
          </li>
        ))}

        {/* Social + Contact inside mobile menu only */}
        <li className="navbar-social-mobile">
          <a href="https://github.com/Trust447" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="#Contact" className="contact-btn">Contact Me </a>
        </li>
      </ul>

      {/* Social Icons & Contact (Desktop only) */}
      <div className="navbar-contact">
        <a href="https://github.com/Trust447" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="#Contact" className="contact-btn">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
