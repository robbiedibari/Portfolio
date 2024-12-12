import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faJava, faReact,faHtml5, faCss3, faGithub, faAndroid } from '@fortawesome/free-brands-svg-icons';
import './SkillsShowcase.scss';

const skills = [
        { icon: faPython, color: '#306998', name: 'Python' },        // Python Blue
        { icon: faJsSquare, color: '#f7df1e', name: 'JavaScript' },  // JavaScript Yellow
        { icon: faJava, color: '#007396', name: 'Java' },            // Java Blue
        { icon: faReact, color: '#61dafb', name: 'React' },          // React Cyan
        { icon: faHtml5, color: '#e34c26', name: 'HTML' },           // HTML Orange
        { icon: faCss3, color: '#264de4', name: 'CSS3' },            // CSS Blue
        { icon: faGithub, color: '#333', name: 'GitHub' },           // GitHub Dark Gray
        { icon: faAndroid, color: '#3ddc84', name: 'Android' },      // Android Green
      ];
      
    
  const SkillsShowcase = () => {
    return(
        <div className="skills-showcase">
            {skills.map((skill,index) => (
                <div className = "skill" key={index}>
                    <FontAwesomeIcon icon={skill.icon}  color={skill.color} size ="3x" />
                    <p>{skill.name}</p>
                    </div>
            ))}
        </div>
    );
  };

  export default SkillsShowcase;