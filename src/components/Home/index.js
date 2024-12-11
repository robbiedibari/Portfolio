import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import ProfilePicture from '../../assets/images/Profile_Picture.jpg'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'R', 'o', 'b', 'e', 'r', 't', 'o'];
    const jobArray = ['A',' ','S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
       
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

