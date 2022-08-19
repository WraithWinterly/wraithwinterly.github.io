import React from 'react';

import './HeaderMenu.css';

function HeaderMenu({ isOpen, headerLinks, handleCloseMenu }) {
  return (
    <div className={isOpen ? 'HeaderMenu' : 'HeaderMenu HeaderMenu-hidden'} onClick={e => e.target === e.currentTarget ? handleCloseMenu() : () => { }}>
      <div className='HeaderMenu-link-container'>
        {(headerLinks)}
      </div>
    </div>
  );
}

export default HeaderMenu;