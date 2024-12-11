import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Loader from 'react-loaders'; // Correct path to the Loader component
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
          Hi, I'm Roberto di Bari, a Computer Science graduate with a passion for coding and a growing interest in backend development and Machine Learning. I thrive on solving complex problems and enjoy bringing ideas to life through Python and other technologies. I'm enthusiastic about learning how to build efficient backend systems and continuously seek opportunities to expand my skill set.
          </p>
          <p>
          My programming journey began with Python, and I’ve been captivated by its versatility ever since. Whether experimenting with backend concepts or exploring machine learning, I’m eager to apply my knowledge, tackle new challenges, and grow as a software engineer.
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
