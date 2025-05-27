import React, { useEffect, useRef } from "react";
import 'flag-icons/css/flag-icons.min.css';
import "./about-styles.css"

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      id: 'nationality',
      title: "Nationality",
      iconClass: "fi fi-ng",
      label: "Nigeria",
    },
    {
      id: 'education',
      title: "Education",
      image: "uniuyo.png",
      label: "University Of Uyo",
    },
    {
      id: 'language',
      title: "Language",
      iconClass: "fi fi-gb",
      label: "Native",
    },
  ];

  return (
    <div id="About" className="about-container">
      <div className="title">
        <h2>
          AboutMe <span>()</span>
        </h2>
      </div>
      <div className="about-card">
        {items.map((item, index) => (
          <div
            className="card"
            key={item.id}
            ref={el => (cardsRef.current[index] = el)}
          >
            <h3>
              <span>{"<"}</span>
              {item.title}
              <span>{" />"}</span>
            </h3>
            {item.image ? (
              <img src={item.image} alt={item.label} />
            ) : (
              <span className={item.iconClass} style={{ fontSize: "80px" }}></span>
            )}
            <h4>{item.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;