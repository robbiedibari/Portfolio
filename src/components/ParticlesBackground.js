import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const ParticlesBackground = () => {
    const particlesInit = async (main) =>{
        await loadFull(main);
    };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#000000",
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#FFD700",
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
            links: {
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
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
        className="particles-bg"
      />
    );
};

export default ParticlesBackground;

