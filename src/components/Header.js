import React from 'react';

import useWindowSize from '../hooks/useWindowSize';

import './Header.css';

function Header() {

  const size = useWindowSize();

  const headerLinks = (
    <div className='Header-link-container'>
      <a className='Header-link' href="#home">Home</a>
      <a className='Header-link' href="#skills">Skills</a>
      <a className='Header-link' href="#showcase">Showcase</a>
      <a className='Header-link' href="#all-projects">All Projects</a>
      <a className='Header-link' href="#contact">Contact</a>
    </div>
  );

  return (
    <div className='Header'>
      <div className='Header-top'>
        <div className='Header-top-content'>
          <a href="/" className='Header-wraith-button'>
            <img className='Header-pfp' src={`${process.env.PUBLIC_URL}/imgs/pfp256.png`} alt='Profile Picture'></img>
            <h2 className='Header-wraith-text'>WraithWinterly</h2>
          </a>
          {size.width > 768 && (
            headerLinks
          )}
          {size.width <= 768 && (
            <button className='Header-menu-button'>
              <span className="material-symbols-outlined">
                Menu
              </span>
            </button>
          )}
        </div>
      </div>

      <div className='Header-sub'>
        {headerLinks}
      </div>
    </div>
  );
}

export default Header;