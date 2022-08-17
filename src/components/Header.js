import React, { useEffect } from 'react';
import PFP256 from '../assets/pfp256.png';
import useWindowSize from './Hooks';
function Header() {

  const size = useWindowSize();

  return (
    <div className='Header'>
      <a href="/" className='wraith-button'>
        <img className='pfp' src={PFP256} alt='Profile Picture'></img>
        <h2>WraithWinterly</h2>
      </a>
      {size.width >= 768 && (
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </div>
  );
}

export default Header;