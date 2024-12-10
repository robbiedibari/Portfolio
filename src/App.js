import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import './App.scss';
import Contact from './components/Contact';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;