import React from 'react';

import useWindowSize from '../hooks/useWindowSize';

function Header() {

  const size = useWindowSize();

  const headerButtons = (
    <div className='header-buttons'>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#showcase">Showcase</a>
      <a href="#all-projects">All Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );

  return (
    <div className='Header'>
      <div className='Header--top'>
        <a href="/" className='wraith-button'>
          <img className='pfp' src={`${process.env.PUBLIC_URL}/imgs/pfp256.png`} alt='Profile Picture'></img>
          <h2 className='wraith-text'>WraithWinterly</h2>
        </a>
        {size.width > 768 && (
          headerButtons
        )}
        {size.width <= 768 && (
          <button className='subheader-button'>
            <span className="material-symbols-outlined">
              Menu
            </span>
          </button>
        )}
      </div>
      <div className='subheader'>
        {headerButtons}
      </div>
    </div>
  );
}

export default Header;