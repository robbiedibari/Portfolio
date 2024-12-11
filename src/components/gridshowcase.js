import React from 'react';
import './gridshowcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Import project images
import BudgetTrackerImg from '../assets/images/Budgetting.png';
import MaptyImg from '../assets/images/mapty.png';
import PremierLeagueImg from '../assets/images/premier.jpg';
import GuessNumberImg from '../assets/images/guess_the_number.png';
import WorkInProgressImg from '../assets/images/workprogress.jpg';

// Sample project data
const projects = [
  {
    id: '01',
    name: 'Budget Tracker',
    description: 'A Python budget tracking app.',
    tools: ['Python', 'Flask', 'SQLite'],
    image: BudgetTrackerImg,
    github: 'https://github.com/robbiedibari/FinancialWebApp',
  },
  {
    id: '02',
    name: 'Mapty',
    description: 'Track your workout locations using Leaflet maps.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Leaflet'],
    image: MaptyImg,
    github: 'https://github.com/robbiedibari/Mapty',
  },
  {
    id: '03',
    name: 'Premier League Predictions',
    description: 'Premier League match prediction app.',
    tools: ['Python', 'Scikit-Learn', 'Pandas'],
    image: PremierLeagueImg,
    github: 'https://github.com/robbiedibari/CAP4610Final',
  },
  {
    id: '04',
    name: 'Guess the Number',
    description: 'A JavaScript number guessing game.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: GuessNumberImg,
    github: 'https://github.com/robbiedibari/Guess-The-Number',
  },
  {
    id: '05',
    name: 'Work in Progress',
    description: 'A project in development.',
    tools: ['TBD'],
    image: WorkInProgressImg,
    github: 'https://github.com/yourusername/work-in-progress',
  },
];

const GridShowcase = () => {
  return (
    <div className="grid-showcase">
      {projects.map((project, index) => (
        <div key={index} className="grid-item">
          <div className="flashcard">
            <h2 className="project-name">{project.name}</h2>
            <img src={project.image} alt={project.name} className="project-image" />
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool">
                  {tool}
                </span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridShowcase;
