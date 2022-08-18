import Header from './Header';
import AboutMe from './AboutMe';
import Everplast from './Everplast';
import SpaceParallax from './SpaceParallax';
import Showcase from './Showcase';
import AllProjects from './AllProjects';

import { useEffect, useState } from 'react';

function App() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => (window.removeEventListener('scroll', handleScroll));
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <SpaceParallax offsetY={offsetY} />
        <AboutMe />
        <div style={{ height: 'max(150vh, 1000px)' }}></div>
        <Everplast />
        <Showcase />
        <AllProjects />
      </div>
    </div>
  );
}

export default App;
