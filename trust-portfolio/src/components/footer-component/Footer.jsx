import React from 'react';
import './footer-styles.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-socials">
            <a href="https://facebook.com/trustihemebiri" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com/isaactrust447" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/trustihemebiri" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@trustisaac8?" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
        <h3>
          <span>©</span> {new Date().getFullYear()} <strong>Trusted Ideas</strong>. All rights reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
