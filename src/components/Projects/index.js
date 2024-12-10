import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';


const project = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A weather forecasting app built with Kotlin.',
    link: 'https://example.com/weather-app',
  },
  {
    id: 2,
    title: 'Expense Tracker',
    description: 'Track your expenses with this Python web app.',
    link: 'https://example.com/expense-tracker',
  },
  {
    id: 3,
    title: 'LeetCode Gamifier',
    description: 'A web app to gamify LeetCode practice.',
    link: 'https://example.com/leetcode-gamifier',
  },
];

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);

      return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" container about-project">
      <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
              idx={15}
            />
          </h1>
    
      <div className="projects-grid">
        {project.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> View Project
              </a>
            </div>
            <FontAwesomeIcon icon={faCode} className="project-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
