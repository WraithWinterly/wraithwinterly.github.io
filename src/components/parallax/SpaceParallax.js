import React from 'react';
import ParallaxLayer from './ParallaxLayer';

import useWindowSize from '../../hooks/useWindowSize';

import stars from '../../assets/parallax/stars.png';
import nebulae from '../../assets/parallax/nebulae.png';
import dust from '../../assets/parallax/dust.png';
import planets from '../../assets/parallax/planets.png';

function SpaceParallax({ offsetY }) {
  const offset = 0;

  const size = useWindowSize();

  return (
    <div>
      {offsetY - 300 < size.height &&
        <>
          <ParallaxLayer bgOnly={true} />
          <ParallaxLayer offsetY={offsetY} speed={-0.1} img={stars} addOffset={offset} />
          <ParallaxLayer offsetY={offsetY} speed={-0.2} img={nebulae} addOffset={offset} />
          <ParallaxLayer offsetY={offsetY} speed={-0.4} img={dust} addOffset={offset} />
          <ParallaxLayer offsetY={offsetY} speed={-0.8} img={planets} addOffset={offset} />
        </>
      }
    </div>
  );
};


export default SpaceParallax;