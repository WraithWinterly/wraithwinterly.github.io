import React, { useState, useRef } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import HeaderMenu from './HeaderMenu';

import PFP from '../../assets/pfp256.png';

import './Header.css';

function Header() {

  const size = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const menuButton = useRef(null);

  const toggleMenu = () => {
    menuButton.current.blur();
    setIsOpen(prev => !prev);
  };

  function getHeaderLinks(fullMenu) {
    return (
      <>
        <a onClick={fullMenu ? () => toggleMenu() : () => { }} className='Header-link' href="#home">Home</a>
        <a onClick={fullMenu ? () => toggleMenu() : () => { }} className='Header-link' href="#skills">Skills</a>
        <a onClick={fullMenu ? () => toggleMenu() : () => { }} className='Header-link' href="#showcase">Showcase</a>
        <a onClick={fullMenu ? () => toggleMenu() : () => { }} className='Header-link' href="#all-projects">All Projects</a>
        <a onClick={fullMenu ? () => toggleMenu() : () => { }} className='Header-link' href="#contact">Contact</a>
      </>);
  };

  return (
    <>
      <div className='Header'>
        <div className='Header-top'>
          <div className='Header-top-content'>
            <a href="/" className='Header-wraith-button'>
              <img className='Header-pfp' src={PFP} alt='Wraith Header'></img>
              <h2 className='Header-wraith-text'>WraithWinterly</h2>
            </a>
            {size.width > 768 && (
              <div>
                {getHeaderLinks()}
              </div>
            )}
            <button className={size.width <= 768 ? isOpen ? 'Header-menu-button Header-menu-button-open' : 'Header-menu-button' : 'Header-menu-button Header-menu-button-hidden'} onClick={() => toggleMenu()} ref={menuButton}>
              <span className="material-symbols-outlined">
                Menu
              </span>
            </button>
          </div>
        </div>
      </div>
      <HeaderMenu isOpen={isOpen} headerLinks={getHeaderLinks(true)} handleCloseMenu={toggleMenu} />
    </>
  );
}

export default Header;