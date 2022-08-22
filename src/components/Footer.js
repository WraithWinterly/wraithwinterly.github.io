import React from 'react';

import './Footer.css';

function Footer() {
  const createYear = 2022;
  const currentYear = new Date().getFullYear();
  return (
    <div className='Footer'>
      <div className='Footer-container'>
        <div className='Footer-container-column'>
          <p>Ayden's Official Website</p>
          <p>This is my second created website designed for viewing all of my projects and contacting me for required information. If you would like to email me, please use the contact form and I will reply to your email.</p>
        </div>
        <div className='Footer-container-column'>
          <p>&copy; WraithWinterly {createYear === currentYear ? createYear : `${createYear}-${currentYear}`}</p>
          <a href="https://github.com/WraithWinterly/wraithwinterly.github.io" target="_blank" rel="noreferrer">View Source</a>
        </div>
        <div className='Footer-container-column'>
          <p className='accent-color'>Links</p>
          <hr style={{ color: 'white', width: '94%' }}></hr>
          <div className='Footer-container-row'>
            <div className='Footer-container-column'>
              <a href="https://wraithwinterly.github.io" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/WraithWinterly" target="_blank" rel="noreferrer">Github</a>
            </div>
            <div className='Footer-container-column'>
              <a href="https://www.youtube.com/channel/UCoY-P1UvFcRNqE2pDRGyZ4w" target="_blank" rel="noreferrer">Youtube</a>
              <a href="https://twitter.com/WraithWinterly" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Footer;