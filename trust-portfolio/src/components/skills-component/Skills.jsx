import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython
} from "react-icons/fa";
import {
  SiExpress,
  SiVite,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiC,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFlask
} from "react-icons/si";
import { GiPadlock } from "react-icons/gi";

const stackLeft = [
  [
    { Icon: FaHtml5, color: "#e34c26", title: "HTML5" },
    { Icon: FaCss3Alt, color: "#264de4", title: "CSS3" },
    { Icon: FaJs, color: "#f0db4f", title: "JavaScript" }
  ],
  [
    { Icon: FaReact, color: "#61DBFB", title: "React" },
    { Icon: SiTypescript, color: "#3178C6", title: "TypeScript" },
    { Icon: SiVite, color: "#646cff", title: "Vite" }
  ],
  [
    { Icon: SiNextdotjs, color: "#000000", title: "Next.js" },
    { Icon: SiTailwindcss, color: "#38bdf8", title: "Tailwind CSS" },
    { Icon: SiRedux, color: "#764abc", title: "Redux" }
  ]
];

const stackRight = [
  [
    { Icon: FaNodeJs, color: "#68A063", title: "Node.js" },
    { Icon: SiExpress, color: "#68A063", title: "Express.js" },
    { Icon: SiMongodb, color: "#47A248", title: "MongoDB" }
  ],
  [
    { Icon: SiMysql, color: "#4479A1", title: "MySQL" },
    { Icon: SiPostgresql, color: "#336791", title: "PostgreSQL" },
    { Icon: FaPython, color: "#306998", title: "Python" }
  ],
  [
    { Icon: SiC, color: "#00599C", title: "C" },
    { Icon: SiFlask, color: "#000000", title: "Flask" },
    { Icon: GiPadlock, color: "#E74C3C", title: "Security" }
  ]
];

const Skills = () => (
  <div id="Skills" className="skills-container">
    <div className="title">
      <h2>TechStack <span>()</span></h2>
    </div>

    <div className="stack">
      {/* Left stack-items */}
      <div className="stack-items">
        {stackLeft.map((group, i) => (
          <div key={i} className="skills">
            {group.map(({ Icon, color, title }, idx) => (
              <div key={idx} className="skill-icon" title={title}>
                <Icon size={60} color={color} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right stack-items */}
      <div className="stack-items">
        {stackRight.map((group, i) => (
          <div key={i} className="skills">
            {group.map(({ Icon, color, title }, idx) => (
              <div key={idx} className="skill-icon" title={title}>
                <Icon size={60} color={color} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
