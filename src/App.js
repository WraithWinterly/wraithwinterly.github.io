import Header from './components/Header';

import Home from './components/Home';
import SpaceParallax from './components/SpaceParallax';

import Everplast from './components/content/Everplast';
import Showcase from './components/content/Showcase';
import AllProjects from './components/content/AllProjects';

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
      <SpaceParallax offsetY={offsetY} />
      <Home />
      <div id='home' style={{ height: 'max(120vh, 600px)' }}></div>
      <div className='App-content'>
        <Everplast />
        <Showcase />
        <AllProjects />
      </div>
    </div>
  );
}

export default App;
