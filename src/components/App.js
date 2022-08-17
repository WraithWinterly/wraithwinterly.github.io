import Header from './Header';
import AboutMe from './AboutMe';
import Everplast from './Everplast';
import SpaceParallax from './SpaceParallax';
import Showcase from './Showcase';
import AllProjects from './AllProjects';

import { Parallax } from '@react-spring/parallax';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <Parallax pages={4} style={{ height: '100vh' }}>
          <div style={{ height: 'max(100vh, 600px)' }}></div>
          <SpaceParallax />
          <AboutMe />
          <Everplast />
          <Showcase />
          <AllProjects />
        </Parallax>
      </div>
    </div>
  );
}

export default App;
