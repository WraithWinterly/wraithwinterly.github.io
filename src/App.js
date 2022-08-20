import Header from './components/header/Header';

import Home from './components/Home';
import SpaceParallax from './components/parallax/SpaceParallax';

import Skills from './components/page-sections/Skills';
import Everplast from './components/page-sections/Everplast';
import Showcase from './components/page-sections/Showcase';
import AllProjects from './components/page-sections/AllProjects';

import { useEffect, useState } from 'react';

import './App.css';

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
      <div className='App-page-sections'>
        <Skills />
        <Everplast />
        <Showcase />
        <AllProjects />
      </div>
    </div>
  );
}

export default App;
