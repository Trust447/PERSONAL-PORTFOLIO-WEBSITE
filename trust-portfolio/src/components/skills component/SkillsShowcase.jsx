import React from "react";
import "./skills-styles.css";

const traits = [
  {
    title: "Problem Solver",
    description:
      "I enjoy tackling real-world problems with clean, efficient code.",
  },
  {
    title: "Team Player",
    description:
      "I collaborate well with others to deliver solid, user-focused solutions.",
  },
  {
    title: "Detail-Oriented",
    description:
      "I pay attention to the small things — from clean UI to efficient APIs.",
  },
  {
    title: "Growth-Oriented",
    description:
      "I’m always learning, adapting, and improving my skills and workflows.",
  },
];

const specialties = [
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "React.js", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "REST APIs", level: 90 },
  { name: "SQL & NoSQL", level: 75 },
  { name: "Git & GitHub", level: 90 },
];

export default function SkillsShowcase() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Strengths</h2>
      <p className="skills-subtext">
        I bring both technical expertise and a strong personal ethic to every
        project I work on.
      </p>

      <div className="traits-grid">
        {traits.map((trait) => (
          <div className="trait-card" key={trait.title}>
            <h3 className="trait-title">{trait.title}</h3>
            <p className="trait-description">{trait.description}</p>
          </div>
        ))}
      </div>

      <div className="specialties">
        <h3 className="specialties-heading">Core Technologies</h3>
        {specialties.map(({ name, level }) => (
          <div key={name} className="specialty">
            <div className="specialty-label">
              {name} <span className="specialty-percent">{level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"
              style={{ "--fill-width": `${level}%` }}
              />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
