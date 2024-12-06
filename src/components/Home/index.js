import {Link} from 'react-router-dom';
import React, { useEffect, useState} from 'react';
import LogoTitle from '../../assets/images/prova-removebg.png';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders' // Correct path to the Loader component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'b','e','r','t','o']
    const jobArray = ['S','o','f','t','e','r',' ','E','n','g','i','n','e','e','r']


useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timer); // Cleanup function to clear the timeout
    }, []);
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone" >
                <h1>
                 <span className={letterClass}>H </span>
                 <span className={`${letterClass} _12`}>i,</span>    
                <br /> 
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span>  
                <img src = {LogoTitle} alt='developer'/>
                <AnimatedLetters 
                letterClass={letterClass}
                 strArray={nameArray}
                 idx={15}
                 />
                  <br />
                  <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray}
                 idx={22}/>
                  
                </h1>
                <h2> Full Stack Developer / Python Enthusiast</h2>
                <Link to='/contat' className="flat-button">Contact Me</Link>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple"/>
        </>
    );
}

export default Home 