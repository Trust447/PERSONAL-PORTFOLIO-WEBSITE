import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <div className="home">
        {/* Introduction Section */}
        <div className="introduction">
          <p>Hello, I am</p>
          <h1 className="name">
            <span>{"<"}</span>Trust
          </h1>
          <h1 className="name last-name">
            Ihemebiri<span>{"/>"}</span>
          </h1>
          <p className="second-paragraph">Software Engineer</p>
          <a href="/resume.pdf" download className="resume-button">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/download--v1.png"
              alt="Download icon"
              style={{ width: '12px', height: '12px', marginRight: '5px' }}
            />
            Resume
          </a>
        </div>

        {/* Image and Skills */}
        <div className="image-container">
          <div className="circle" />
          <div className="crop">
            <img className="trust" src="trust.png" alt="Image of Trust" />
          </div>

          <div className="home-skill-icons-container">
            <div className="home-skill-icon icon1">
              <FaReact size={30} color="#61DBFB" />
            </div>
            <div className="home-skill-icon icon2">
              <FaNodeJs size={30} color="#68A063" />
            </div>
            <div className="home-skill-icon icon3">
              <SiMongodb size={30} color="#47A248" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
