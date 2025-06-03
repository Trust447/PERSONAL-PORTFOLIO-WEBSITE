import React, { useEffect, useRef } from "react";
import 'flag-icons/css/flag-icons.min.css';
import "./about-styles.css"

const About = () => {

  return (
    <section id="about" className="about-section">
      <div className="title">
        <h1><span>About</span> Me</h1>
        <p>
          I’m a <strong>Software Engineer</strong>, 
          <strong>Web Designer</strong>, and <strong>Digital Marketer</strong> with over 
          <strong>3 years of experience</strong> turning bold ideas into functional, user-first digital solutions.
        </p>
        <p>
          My journey into tech started with curiosity and determination. That passion led me to the rigorous 
          <strong>ALX Software Engineering program</strong>, where I sharpened my skills in real-world development. 
          Today, I thrive on building all kinds of projects — from personal portfolios to complex dashboards.
        </p>
        <p>
          I combine aesthetics and logic to design and build applications that not only work well, 
          but also deliver meaningful experiences and business value. Whether you're a brand, startup, 
          or recruiter — I'm ready to add value to your vision.
        </p>
      </div>

      <div class="about-right">
        <h3>Tools & Technologies</h3>
        <ul>
          <li>JavaScript, TypeScript</li>
          <li>React, Node.js</li>
          <li>Python, Flask</li>
          <li>Figma, Adobe XD</li>
        </ul>

        <h3>What I Value</h3>
        <ul>
          <li>🎯 Creativity & Clean Design</li>
          <li>⚡ Performance & Scalability</li>
          <li>🤝 Teamwork & Communication</li>
          <li>📈 Business Results & User Focus</li>
        </ul>
      </div>
    </section>
  );
};
export default About;