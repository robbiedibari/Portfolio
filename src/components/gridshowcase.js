import React from 'react';
import './gridshowcase.scss';

// Sample project data
const projects = [
  { id: '01', image: '../../assets/images/Profile_Picture.jpg', description: 'A weather forecasting app built with Kotlin.' },
  { id: '02', image: 'Profile_Picture.jpg', description: 'Track your expenses with this Python web app.' },
  { id: '03', image: 'Profile_Picture.jpg', description: 'A web app to gamify LeetCode practice.' },
  { id: '04', image: 'Profile_Picture.jpg', description: 'An e-commerce platform for handmade goods.' },
  { id: '05', image: 'Profile_Picture.jpg', description: 'A personal portfolio website built with React.' },
  { id: '06', image: 'Profile_Picture.jpg', description: 'A machine learning model for image recognition.' },
];

const GridShowcase = () => {
  return (
    <div className="grid-showcase">
      {projects.map((project, index) => (
        <div key={index} className="grid-item">
          <img src={project.image} alt={`Project ${project.id}`} />
          <div className="overlay">
            <span className="project-id">{project.id}</span>
            <p className="description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridShowcase;
