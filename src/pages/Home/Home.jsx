import { Contact } from "../../components/Info/Info";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Home.css'
import Loading from "../../components/Loading/Loading";
import { HomeNavbar, ShowNavBar } from "./elements/homeElements";
function Home() {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState(false);
  const [initPos, setInitPos] = useState('hide');

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
          value: "#00dddd8a",
          opacity: 1,
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
          speed: 1,
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
        <ShowNavBar
          active={active}
          setActive={setActive}
          setInitPos={setInitPos}
        />
        <HomeNavbar initPos={initPos}>
          <a href="/#programming">Programming classes</a>
        </HomeNavbar>
        <div className="home">
          <h1 style={{ color: "#ffecd1", fontWeight: 400 }}>Pedro Pablo Zavala Tejos</h1>
          <h3 style={{ color: "#ffecd1", margin: '0 0 2rem 0', fontWeight: 200, padding: 0 }}>Computer Science Student</h3>
          <Contact showResume={true} custom={'home-card'} />
        </div>

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{ zIndex: -3 }}
        />
      </>
    );
  }

  const backupStyle = {
    backgroundColor: '#001524',
    height: '100%',
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: '100%',
    top: 0,
    left: 0
  }

  return (
    <div style={backupStyle}>
      <Loading />
    </div>
  )
}

export default Home
