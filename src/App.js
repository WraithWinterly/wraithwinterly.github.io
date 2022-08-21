import Header from './components/header/Header';

import Home from './components/Home';
import SpaceParallax from './components/parallax/SpaceParallax';

import PageSection from './components/page-sections/PageSection';

import Skills from './components/page-sections/Skills';
import Showcase from './components/page-sections/Showcase';
import Projects from './components/page-sections/Projects';
import Contact from './components/page-sections/Contact';

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
        <PageSection headerText={'Skills'} contentJSX={<Skills />} id='skills' />
        <PageSection headerText={'Showcase'} contentJSX={<Showcase offsetY={offsetY} />} noPadding={true} id='showcase' />
        <PageSection headerText={'All Projects'} contentJSX={<Projects />} id='all-projects' />
        <PageSection headerText={'Contact'} contentJSX={<Contact />} id='contact' />
      </div>
    </div>
  );
}

export default App;
