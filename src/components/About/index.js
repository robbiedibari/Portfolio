import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Loader from 'react-loaders'; // Correct path to the Loader component
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import TypewriterEffect from './TypewriterEffect';
import SkillsShowcase from './SkillsShowcase';

const roles = [
  'Aspiring Software Engineer.',
  'Full Stack Passionate.',
  'Machine Learning Enthusiast.',
  'Coding Lover.'
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1500); // Change role every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, I'm Roberto Di Bari, a recent Computer Science graduate with a passion for building scalable backend systems and exploring the exciting world of Machine Learning. I thrive on solving complex problems and enjoy bringing ideas to life through Python and other technologies.
          </p>
          <p>
            I recently graduated with a Bachelor's in Computer Science. My journey into programming started with Python, and I've been captivated by the power and flexibility it offers for both backend development and machine learning projects.
          </p>

          <TypewriterEffect />
          <SkillsShowcase />


          <a href="/robertodibari.pdf" className="download-button" download>
          Download Resume
        </a>

        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
