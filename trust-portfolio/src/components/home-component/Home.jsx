import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './home-styles.css';
import { DownloadCloud } from 'lucide-react';

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: 'easeOut' },
  viewport: { once: true },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: 'easeOut' },
  viewport: { once: true },
};

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        {/* === Left Section === */}
        <motion.div className="home-text" {...fadeInLeft}>
          <p className="intro">Hello, I am</p>

          <h1 className="name">
            <span>{"<"}</span>Trust
          </h1>
          <h1 className="name last-name">
            Ihemebiri<span>{"/>"}</span>
          </h1>

          <TypeAnimation
            sequence={['Software Engineer', 3000, 'Web Designer', 3000, 'Digital Marketer', 3000]}
            wrapper="p"
            className="typing"
            speed={50}
            repeat={Infinity}
          />

          <div className="buttons">
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
            <a href="/Trust Ihemebiri.pdf" download className="resume-button">
              <DownloadCloud size={16} className="download-icon" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* === Right Section === */}
        <motion.div className="home-image" {...fadeInRight}>
          <motion.img
            src="trust.webp"
            alt="Trust Ihemebiri"
            className="profile-image"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;