import React from 'react';
import EverplastBG from '../assets/EverplastBG.png';

function Everplast() {
  return (
    <div className='everplast' style={{ backgroundImage: `url(${EverplastBG})`, zIndex: '10' }}>
      <h1>Everplast</h1>
      <div className='buttons'>
        <a className='button lg github' href='https://github.com/WraithWinterly/Everplast' target='_blank'>View Source</a>
        <a className='button lg steam' href='https://store.steampowered.com/app/1896630/Everplast/' target='_blank'>Buy on Steam</a>
        <a className='button lg' href='' target='_blank'>Explore</a>
      </div>
    </div>
  );
}

export default Everplast;