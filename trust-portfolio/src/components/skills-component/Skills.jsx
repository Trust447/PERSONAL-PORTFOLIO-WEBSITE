import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./skills-styles.css"

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

// Variants for each skill icon (fade + scale)
const skillIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Variants for each group (row) of skills (stagger children)
const skillGroupVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, ease: 'easeOut' }
  }
};

const Skills = () => {
  // triggerOnce removed here to allow animation every time section scrolls into view
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div id="Skills" className="skills-container" ref={ref}>
      {/* Title with animation */}
      <motion.div
        className="title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <h2>TechStack <span>()</span></h2>
      </motion.div>

      {/* Stack container with staggered group animation */}
      <motion.div
        className="stack"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
      >
        {/* Left side skill groups */}
        <div className="stack-items">
          {stackLeft.map((group, i) => (
            <motion.div key={i} className="skills" variants={skillGroupVariants}>
              {group.map(({ Icon, color, title }, idx) => (
                <motion.div
                  key={idx}
                  className="skill-icon"
                  title={title}
                  variants={skillIconVariants}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={60} color={color} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Right side skill groups */}
        <div className="stack-items">
          {stackRight.map((group, i) => (
            <motion.div key={i} className="skills" variants={skillGroupVariants}>
              {group.map(({ Icon, color, title }, idx) => (
                <motion.div
                  key={idx}
                  className="skill-icon"
                  title={title}
                  variants={skillIconVariants}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={60} color={color} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
