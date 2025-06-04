import React from "react";
import 'flag-icons/css/flag-icons.min.css';
import "./about-styles.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title"><span>About</span> Me</h2>
      <p className="about-subtext">
        I’m a <strong>Software Engineer</strong>, <strong>Web Designer</strong>, and <strong>Digital Marketer</strong> with over <strong>3 years of experience</strong> turning bold ideas into functional, user-first digital solutions.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-heading">My Journey</h3>
          <p className="about-description">
            My journey into tech started with curiosity and determination. That passion led me to the rigorous <strong>ALX Software Engineering program</strong>, where I sharpened my skills in real-world development. Today, I thrive on building all kinds of projects — from personal portfolios to complex dashboards.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-heading">My Mission</h3>
          <p className="about-description">
            I combine aesthetics and logic to design and build applications that not only work well, but also deliver meaningful experiences and business value. Whether you're a brand, startup, or recruiter — I'm ready to add value to your vision.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-heading">Tools & Technologies</h3>
          <ul className="about-list">
            <li>JavaScript, TypeScript</li>
            <li>React, Node.js</li>
            <li>Python, Flask</li>
            <li>Figma, Adobe XD</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-heading">What I Value</h3>
          <ul className="about-list">
            <li>🎯 Creativity & Clean Design</li>
            <li>⚡ Performance & Scalability</li>
            <li>🤝 Teamwork & Communication</li>
            <li>📈 Business Results & User Focus</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;