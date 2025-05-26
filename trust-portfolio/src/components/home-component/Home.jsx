import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './home-styles.css'

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: 'easeInOut' },
  viewport: { once: true },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: 'easeInOut' },
  viewport: { once: true },
};

const scaleIn = (delay = 0) => ({
  whileInView: { scale: [0, 1] },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
  viewport: { once: true },
});

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <div className="home">

        {/* Introduction Section */}
        <motion.div className="introduction" {...fadeInLeft}>
          <p>Hello, I am</p>
          <h1 className="name">
            <span>{"<"}</span>Trust
          </h1>
          <h1 className="name last-name">
            Ihemebiri<span>{"/>"}</span>
          </h1>

          <TypeAnimation
            sequence={['Software Engineer', 3000, 'Designer', 3000]}
            wrapper="p"
            className="second-paragraph"
            speed={50}
            repeat={Infinity}
          />

          <a
            href="/Trust Ihemebiri.pdf"
            download
            className="resume-button"
            aria-label="Download Resume"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/000000/download--v1.png"
              alt="Download icon"
              style={{ width: '12px', height: '12px', marginRight: '5px' }}
            />
            Resume
          </a>
        </motion.div>

        {/* Image and Skill Icons */}
        <motion.div className="image-container" {...fadeInRight}>
          <div className="circle" />
          <div className="crop">
            <img
              className="trust"
              src="trust.png"
              alt="Trust Ihemebiri"
            />
          </div>

          
        </motion.div>
      </div>

      <hr />
    </div>
  );
};

export default Home;
