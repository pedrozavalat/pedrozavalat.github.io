import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { HomeNavbar, ShowNavBar, HomeOverview } from "./elements/HomeElements";
import { OPTION_PARTICLES } from "./constants";
import './Home.css'
import { Link } from "react-router-dom";


function Home() {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState(false);
  const [initPos, setInitPos] = useState('hide');
  const [loading, setLoading] = useState(true)
  
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

  const particlesLoaded = (container) => console.log('Particles loaded');
  const options = useMemo(() => OPTION_PARTICLES, []);

  return (
    <>
      <ShowNavBar active={active} setActive={setActive} setInitPos={setInitPos} />
      <HomeNavbar initPos={initPos}>
        <Link to={'programming'}>Programming classes</Link>
        <Link to={'math'}>Math classes</Link>
      </HomeNavbar>
      <HomeOverview />
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} style={{ zIndex: -3}} />
    </>
  )
}

export default Home
