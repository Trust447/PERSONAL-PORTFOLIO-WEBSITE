import React from 'react';
import './footer-styles.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="https://facebook.com/trustihemebiri" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/isaactrust447" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com/in/trust-ihemebiri" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com/trustihemebiri" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com/@trustisaac8?" target="_blank" rel="noreferrer"><FaTiktok /></a>
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
