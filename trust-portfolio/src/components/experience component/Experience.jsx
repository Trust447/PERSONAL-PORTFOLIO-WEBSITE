import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './experience-styles.css';

const experienceData = [
  {
    id: 1,
    title: 'Trust Footwear',
    role: 'Frontend Developer',
    responsibilities: [
      'Designed and developed a modern, responsive e-commerce website landing page using HTML, CSS and JavaScript.',
      'Implemented structured layout and clear call-to-action elements to showcase footwear products.',
      'Ensured mobile responsiveness and fast loading for optimal user experience.',
      'Used semantic HTML and clean CSS for maintainability and SEO readiness',
    ],
  },
  {
    id: 2,
    title: 'To Do Manager App',
    role: 'Fullstack Developer',
    responsibilities: [
      'Built a dynamic management app with React for the frontend and Nodejs/Express for the backend.',
      'Implemented user authentication and protected routes using JWT.',
      'Created RESTful API to handle task creation, updating and deletion.',
      'Integrated MongoDB for persistent data storage.',
    ],
  },
  {
    id: 3,
    title: 'Blog API',
    role: 'Backend Developer',
    responsibilities: [
      'Developed a secure REST API using Express.js and MySQL.',
      'Designed endpoints for user registration, login, post creation, and comment management.',
      'Implemented password hashing with bcrypt and JWT-based authentication.',
      'Wrote modular scalable code with proper error handling and validation.',
    ],
  },
  {
    id: 4,
    title: 'Responsive Portfolio Website',
    role: 'Frontend Developer',
    responsibilities: [
      'Created a personal portfolio using ReactJS with dynamic sections and smooth navigations.',
      'Styled the site using custom CSS and Google Fonts to maintain a clean, modern look.',
      'Implemented a responsive layout ensuring compatibility across devices.',
      'Deployed the website.',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ExperienceCard = ({ title, role, responsibilities }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <motion.article
      className="experience"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.03, boxShadow: '0px 6px 20px rgba(30,144,255,0.3)' }}
      tabIndex={0}
      aria-label={`${title} - ${role}`}
    >
      <header>
        <h3>{title}</h3>
        <h4 className="title">
          <span>(</span> {role} <span>)</span>
        </h4>
      </header>
      <section>
        <h5>Responsibilities:</h5>
        <ul>
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const leftExperiences = experienceData.slice(0, 2);
  const rightExperiences = experienceData.slice(2);

  return (
    <section id="Experience" className="experience-container" ref={ref}>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2>
          Experience <span>()</span>
        </h2>
      </motion.div>

      <div className="experiences">
        <div className="left-experiences">
          {leftExperiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>

        <div className="right-experiences">
          {rightExperiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
