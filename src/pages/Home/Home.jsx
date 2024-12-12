import { Text } from "react-font";
import { Contact } from "../../components/Info/Info";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import './Home.css'

function Home() {
  const [init, setInit] = useState(false);
  const color1 = "#ffecd1";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {

  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#001524",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#15616d",

        },
        links: {
          color: "#ffecd1",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 3, max: 10 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  
  if (init) {
    return (
      <>
        <div className="home">
          <h1 style={{ color: "#ffecd1", fontWeight: 400 }}>Pedro Pablo Zavala Tejos</h1>
          <h3 style={{ color: "#ffecd1", margin: '0 0 2rem 0', fontWeight: 200, padding: 0 }}>Computer Science Student</h3>
          <Contact showResume={true} custom={'home-card'} />
        </div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{ zIndex: -1 }}
        />

      </>
    );
  }
  
  return (
    <div className="home" >
      <h1>Pedro Pablo Zavala Tejos</h1>
      <Contact showResume={true} custom={'home-card'} />
    </div>
  )
}

export default Home
