import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import ProfilePicture from '../../assets/images/Profile_Picture.jpg'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'R', 'o', 'b', 'e', 'r', 't', 'o'];
    const jobArray = ['A',' ','S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];
    
    const particlesInit = async (main) => {
        await loadFull(main);
      };



    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#000000", // Background color
          },
          particles: {
            number: {
              value: 100, // Number of particles
              density: {
                enable: true,
                area: 800, // Density area for particles
              },
            },
            color: {
              value: "#FFD700", // Particle color
            },
            shape: {
              type: "circle", // Shape of the particles
            },
            size: {
              value: 3, // Size of the particles
              random: true, // Randomize size
            },
            move: {
              enable: true,
              speed: 1.5, // Particle speed
              direction: "none", // Move in random directions
              random: false,
              straight: false,
              outModes: {
                default: "out", // Particles will leave the canvas and reappear on the opposite side
              },
            },
            lineLinked: {
              enable: true,
              distance: 150,
              color: "#FFD700",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse effect on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Adds particles on click
              },
            },
            modes: {
              repulse: {
                distance: 100, // Repulsion distance
                duration: 0.4,
              },
              push: {
                quantity: 4, // Number of particles added on click
              },
            },
          },
        }}
        className="particles-bg"
      />
            <div className="container home-page">
                <div className="profile-photo">
                    <img src={ProfilePicture} alt="Profile" className="profile-photo" />
                </div>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Full Stack Developer / Python Enthusiast</h2>
                    <br />
                    <Link to="/Contact" className="flat-button">Contact Me</Link>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    );
}

export default Home;

