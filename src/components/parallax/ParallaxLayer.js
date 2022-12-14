import React from 'react';

import './ParallaxLayer.css';

function ParallaxLayer({ bgOnly, offsetY, img, speed, addOffset }) {

  function addBg() {
    if (bgOnly) {
      return {
        backgroundColor: 'black',
        zIndex: '-2',
      };
    }

    return {
      backgroundImage: `url(${img})`,
      transform: `translateY(${offsetY * speed + addOffset}px)`,
    };
  }

  return (
    <div className='ParallaxLayer' style={addBg()}></div>
  );
}

ParallaxLayer.defaultProps = {
  addOffset: 0,
  speed: 1,
  bgOnly: false,
};

export default ParallaxLayer;