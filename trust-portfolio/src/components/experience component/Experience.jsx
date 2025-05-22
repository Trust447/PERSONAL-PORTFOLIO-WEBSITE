import React from 'react';

const experienceData = [
  {
    id: 1,
    title: 'Trust Footwear',
    role: 'Frontend Developer',
    responsibilities: [
      'Designed and develop a modern, responsive e-commerce website landing page usinf HTML, CSS and JavaScript.',
      'Implemented structured layout and clear call-to-action elements to shocase footwear produts.',
      'Ensured mobile responsiveness and fast loading for optimal user experience.',
      'Used semantic HTML and clean CSS for maintainability and SEO readiness'
    ],
  },
  {
    id: 2,
    title: 'To Do Manager App',
    role: 'Fullstack Developer',
    responsibilities: [
      'Built a dynamic management app with React for the frontend and Nodejs/Express for the backend.',
      'Implemented user authentication and protected routes using JWT.',
      'Created RESTfull API to handle task creation, updating and deletion.',
      'Integrated MongoDB for persistent data storage.'
    ],
  },
  {
    id: 3,
    title: 'Blog API ',
    role: 'Backend Developer',
    responsibilities: [
      'Developed a secure REST API using Express.js and MySQL.',
      'Designed endpoints for user registration, login, post creation, and comment management.',
      'Implemented password hashing with bcrypt and JWT-based authentication',
      'Wrote modular scalable code with proper error handling and validation'
    ]
  },
  {
    id: 4,
    title: 'Responsive Portfolio Website',
    role: 'Frontend Developer',
    responsibilities: [
      'Created a personal porfolio using  ReactJS with dynamic sections and smooth navigations.',
      'Styled the site using custom CSS and Google fonts to maintain a clean, mordern look.',
      'Implemented a responsive layout ensuring compatibility across devices.',
      'Deployed the  website'
    ],
  },
];

const ExperienceCard = ({ title, role, responsibilities }) => (
  <div className="experience">
    <div>
      <h3>{title}</h3>
      <h3 className="title">
        <span>(</span> {role} <span>)</span>
      </h3>
    </div>
    <div>
      <h4>Responsibilities:</h4>
      <ul>
        {responsibilities.map((item, idx) => (
          <li key={`${item}-${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div id='Experience' className="experience-container">
      <div className="title">
        <h2>
          Experience <span>()</span>
        </h2>
      </div>

      <div className="experiences">
        <div className="left-experiences">
          {experienceData.slice(0, 2).map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>

        <div className="experience-divide">
          <div className="vertical-divide"></div>
        </div>

        <div className="right-experiences">
          {experienceData.slice(2).map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
