import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import './Showcase.css';

function Showcase({ offsetY }) {
  const size = useWindowSize();

  return (
    <div className='Showcase-img' style={{
      backgroundSize: size.width > 1750 ? 'cover' : '1750px',
      backgroundPositionY: `${-offsetY / (size.width > 768 ? 2.75 : 3) + (size.width > 768 ? 225 : 225)}px`,
    }}>
      <div className='Showcase-button-container'>
        <a className='button button-large button-github' href='https://github.com/WraithWinterly/Showcase' target='_blank' rel="noreferrer">View Source</a>
        <a className='button button-large button-steam' href='https://store.steampowered.com/app/1896630/Showcase/' target='_blank' rel="noreferrer">Buy on Steam</a>
        {/* <a className='button button-large' href='https://wraithwinterly.github.io' target='_blank' rel="noreferrer">Explore</a> */}
      </div>
    </div>
  );
}

export default Showcase;