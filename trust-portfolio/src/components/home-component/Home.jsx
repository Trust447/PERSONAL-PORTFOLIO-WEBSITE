import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './home-styles.css';
import { DownloadCloud } from 'lucide-react';
// import SkillsSession from '../skills component/SkillsShowcase';
// import Contact from '../contact/Contact';

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: 'easeInOut' },
  viewport: { once: true },
};

const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: 'easeInOut' },
};

const Home = () => {
  return (
    <>
      <div id="home" className="home-container">
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
              sequence={['Software Engineer', 3000, 'Web Designer', 3000, 'Digital Marketer', 3000]}
              wrapper="p"
              className="second-paragraph"
              speed={50}
              repeat={Infinity}
            />

            {/* Call to Action Button */}
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>

            <a
              href="/Trust Ihemebiri.pdf"
              download
              className="resume-button"
              aria-label="Download Resume"
            >
              <DownloadCloud size={14} style={{ marginRight: '6px', color: 'white' }} />
              Resume
            </a>
          </motion.div>

          {/* Image and Skill Icons */}
          <motion.div className="image-container" {...fadeInRight}>
            <motion.img
              className="trust"
              initial="initial"
              animate="animate"
              transition={fadeInRight.transition}
              variants={{
                initial: fadeInRight.initial,
                animate: fadeInRight.animate,
              }}
              src="trust.webp"
              alt="Trust Ihemebiri"
            />
          </motion.div>
        </div>
      </div>

      {/* Uncomment these when ready */}
      {/* <SkillsSession /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;