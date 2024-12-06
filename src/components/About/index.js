import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Loader from 'react-loaders' // Correct path to the Loader component
import { faC, faFlask } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timer); // Cleanup function to clear the timeout
    }, []);
    return (
        <>
        <div className = "container about-page">
            <div className='text-zone'>

                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b','o','u','t', ' ', 'M', 'e']}
                    idx={15}/>
                </h1>
                <p>Dolore pariatur sunt duis velit incididunt laboris sunt excepteur velit. Non nostrud ut officia incididunt ea consequat ea. Qui esse deserunt sint Lorem eu in aute ullamco nisi ad ad pariatur. Culpa magna eiusmod est mollit nostrud pariatur magna magna est est ut. Veniam mollit nisi et consequat et sit est eiusmod.</p>
                <p>Minim labore culpa eiusmod in qui dolor aute dolore excepteur cillum. Cupidatat ex laboris magna est quis occaecat laboris laboris commodo elit commodo Lorem fugiat enim. Lorem anim magna nisi officia velit amet nostrud commodo. Culpa eu tempor sit mollit aliqua aliqua amet deserunt enim nisi officia aute dolore.</p>
                <p>Excepteur dolore consectetur id adipisicing excepteur. Aliquip incididunt ex eiusmod excepteur magna cupidatat aliqua amet non consectetur consequat. Voluptate pariatur laborum anim ex ea officia nisi aliquip esse sint est labore. Voluptate velit aliquip est ad labore tempor irure ullamco esse nostrud. Amet ipsum dolor dolor do laborum. Laboris laboris cupidatat quis adipisicing excepteur.</p>

            </div>
            <div className = "stage-cube-cont">
                <div className = "cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon  icon={faPython} color="#ffd700"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon  icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon  icon={faCss3} color="#28a4d9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon  icon={faJsSquare} color="#efd81d"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon  icon={faJava} color="#6e0101"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon  icon={faReact} color="#5ed4f4"/>
                    </div>
                </div>
            </div>
        </div>

        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About