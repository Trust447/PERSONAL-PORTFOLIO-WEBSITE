import React, { useState } from 'react';
import { NavbarMenu } from './navbar-data';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" aria-label="Homepage">
        <h3>T</h3>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a href={item.link} onClick={() => setMenuOpen(false)}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="navbar-contact">
        <a href="#Contact" className="contact-btn">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
