import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import Layout from './components/Layout';
import './App.scss';
import ParticlesBackground from './components/ParticlesBackground';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <>
     <ParticlesBackground />
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
           <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="about" element={<About />} />
             <Route path="projects"  element={<Projects/>} />
             <Route path="contact" element={<Contact />} />

           </Route>
         </Routes>
       </Suspense>
  </>
  );
}

export default App;
