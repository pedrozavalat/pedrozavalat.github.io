import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { HomeNavbar, ShowNavBar, HomeOverview } from "./elements/HomeElements";
import { OPTION_PARTICLES, optionParticles } from "./constants";
import './Home.css'
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";



export const LightDarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
      <button
      className={`light-dark-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      style={{ color: !isDarkMode ? '#444444' : '#ff6666' }} // dark gray if light, red if dark
      >
      {isDarkMode ? (
        <FaSun style={{ marginRight: 0 }} />
      ) : (
        <FaMoon style={{ marginRight: 0 }} />
      )}
      </button>
    );
}

function Home() {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState(false);
  const [initPos, setInitPos] = useState('hide');
  const [loading, setLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (init) setLoading(false);
  }, [init])

  const particlesLoaded = (container) => {
    if (container) {
      // Update particles theme based on dark mode
      container.loadOptions(optionParticles(isDarkMode));
    }
    console.log('Particles loaded');
  };
  const options = useMemo(() => optionParticles(isDarkMode), [isDarkMode]);

  return (
    <>
      {/* <ShowNavBar active={active} setActive={setActive} setInitPos={setInitPos} />
      <HomeNavbar initPos={initPos}>
        <Link to={'programming'}>Programming classes</Link>
        <Link to={'math'}>Math classes</Link>
      </HomeNavbar> */}
      <LightDarkModeToggle 
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <HomeOverview isDarkMode={isDarkMode}/>
      <Particles 
        id="tsparticles" 
        particlesLoaded={particlesLoaded} 
        options={options} 
        style={{ zIndex: -3 }} 
      />
    </>
  )
}

export default Home
