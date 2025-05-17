import React from "react";
import 'flag-icons/css/flag-icons.min.css';

const About = () => {
  return (
    <div id="About" className='about-container'>
        <div className='title'>
            <h2>AboutMe <span>()</span></h2>
        </div>
        <div className='about-card'>
            <div className="card">
                <h3><span>{"<"}</span>Nationality <span>{" />"}</span></h3>
                <span className="fi fi-ng" style={{ fontSize: '80px' }}></span>

                <h4>Nigeria</h4>
            </div>

            <div className="card">
                <h3><span>{"<"}</span>Education <span>{" />"}</span></h3>
                <img src="uniuyo.png" alt="university of uyo" />
                <h4>University Of Uyo</h4>
            </div>

            <div className="card">
                <h3><span>{"<"}</span>Language <span>{" />"}</span></h3>
                <span className="fi fi-gb" style={{ fontSize: '80px' }}></span>
                <h4>Native</h4>
            </div>
        </div>
    </div>
  )
}

export default About