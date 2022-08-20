import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import './Everplast.css';

function Everplast({ offsetY }) {
  const size = useWindowSize();

  return (
    <div className='Everplast-img' style={{
      backgroundSize: size.width > 1750 ? 'cover' : '1750px',
      backgroundPositionY: `${-offsetY / (size.width > 768 ? 2.75 : 3) + (size.width > 768 ? 275 : 225)}px`,
    }}>
      <div className='Everplast-button-container'>
        <a className='button button-large button-github' href='https://github.com/WraithWinterly/Everplast' target='_blank' rel="noreferrer">View Source</a>
        <a className='button button-large button-steam' href='https://store.steampowered.com/app/1896630/Everplast/' target='_blank' rel="noreferrer">Buy on Steam</a>
        <a className='button button-large' href='https://wraithwinterly.github.io' target='_blank' rel="noreferrer">Explore</a>
      </div>
    </div>
  );
}

export default Everplast;