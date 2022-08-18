import React from 'react';
import ParallaxLayer from './ParallaxLayer';

import SpaceBackgroundStars from '../assets/SpaceBackgroundStars.png';
import SpaceBackgroundNebulae from '../assets/SpaceBackgroundNebulae.png';
import SpaceBackgroundDust from '../assets/SpaceBackgroundDust.png';
import SpaceBackgroundPlanets from '../assets/SpaceBackgroundPlanets.png';

function SpaceParallax({ offsetY }) {
  const offset = 0;

  return (
    <>
      <ParallaxLayer bgOnly={true} />
      <ParallaxLayer offsetY={offsetY} speed={-0.1} img={SpaceBackgroundStars} addOffset={offset} />
      <ParallaxLayer offsetY={offsetY} speed={-0.2} img={SpaceBackgroundNebulae} addOffset={offset} />
      <ParallaxLayer offsetY={offsetY} speed={-0.4} img={SpaceBackgroundDust} addOffset={offset} />
      <ParallaxLayer offsetY={offsetY} speed={-0.8} img={SpaceBackgroundPlanets} addOffset={offset} />
    </>
  );
};


export default SpaceParallax;