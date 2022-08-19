import React from 'react';
import EverplastBG from '../../assets/everplast.png';

import './Everplast.css';

function Everplast() {
  return (
    <div className='Everplast' style={{ backgroundImage: `url(${EverplastBG})` }}>
      <h1 className='Everplast-text'>Everplast</h1>
      <div className='Everplast-button-container'>
        <a className='button button-large button-github' href='https://github.com/WraithWinterly/Everplast' target='_blank'>View Source</a>
        <a className='button button-large button-steam' href='https://store.steampowered.com/app/1896630/Everplast/' target='_blank'>Buy on Steam</a>
        <a className='button button-large' href='' target='_blank'>Explore</a>
      </div>
    </div>
  );
}

export default Everplast;