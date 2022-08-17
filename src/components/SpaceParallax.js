import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import SpaceBackgroundStars from '../assets/SpaceBackgroundStars.png';
import SpaceBackgroundNebulae from '../assets/SpaceBackgroundNebulae.png';
import SpaceBackgroundDust from '../assets/SpaceBackgroundDust.png';
import SpaceBackgroundPlanets from '../assets/SpaceBackgroundPlanets.png';

function SpaceParallax() {
  const applyStyle = (bg, zidx) => {
    return {
      backgroundImage: `url(${bg})`,
      backgroundSize: '110%',
      backgroundPosition: 'center',
      imageRendering: 'auto',
      imageRendering: '-moz-crisp-edges',
      imageRendering: '-webkit-crisp-edges',
      imageRendering: 'crisp-edges',
      imageRendering: '-o-crisp-edges', //opera
      imageRendering: '-webkit-optimize-contrast',
      imageRendering: 'pixelated',
      zIndex: `${zidx}`,
      height: '1900px',
      backgroundRepeat: 'repeat',
    };
  };
  return (
    <>
      <ParallaxLayer style={{ backgroundColor: 'black', width: '100%', height: '120vh', zIndex: -1 }} />
      <ParallaxLayer speed={0.01} style={applyStyle(SpaceBackgroundStars, -1)} />
      <ParallaxLayer speed={0.05} style={applyStyle(SpaceBackgroundNebulae, -1)} />
      <ParallaxLayer speed={0.2} style={applyStyle(SpaceBackgroundDust, -1)} />
      <ParallaxLayer speed={0.5} style={applyStyle(SpaceBackgroundPlanets, -1)} />
    </>
  );
}

export default SpaceParallax;