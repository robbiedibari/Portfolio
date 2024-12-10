import React, { useEffect, useState } from 'react';
import './TypewriterEffect.scss';

const skills = ['Python Developer', 'Backend Passionate', 'Machine Learning Enthusiast', 'Full Stack Developer'];

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(skills[index].substring(0, subIndex));

      if (!isDeleting && subIndex === skills[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
      }

      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return <h2 className="typewriter">{text}</h2>;
};

export default TypewriterEffect;
