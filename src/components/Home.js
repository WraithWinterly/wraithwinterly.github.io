import React, { useEffect, useRef } from 'react';

import './Home.css';

function Home() {

  const homeRef = useRef(null);

  useEffect(() => { homeRef.current.scrollIntoView(); }, []);

  return (
    <>
      {/* Space out absolute home content from rest of the page */}
      <div id='home' ref={homeRef} style={{ height: 'max(120vh, 600px)' }}></div>

      {/* About section */}
      <div className='Home-about'>
        <div className='Home-content'>
          <div className='Home-content-text'>
            <em style={{ color: 'pink' }}>Warning: This site is not yet ready nor complete.</em>
            <h1>I am <span className='accent-color'>Ayden Springer</span>.</h1>
            <h2>I build <span className='accent-color'>digital experiences</span>.</h2>
            <p className='text-color-light'>Web developer previously in game development. A passionate, motivated programmer. Building accessible, stunning, and high quality products.</p>
          </div>
          <div className='Home-about-buttons-container'>
            <a className='Home-about-button button button-github' href='https://github.com/WraithWinterly/wraithwinterly.github.io' target='_blank'>View Source</a>
            <a className='Home-about-button button button-github' href='https://github.com/WraithWinterly' target='_blank'>View Github</a>
            <a className='Home-about-button button button-twitterr' href='https://twitter.com/WraithWinterly' target='_blank'>View Twitter</a>
            <a className='Home-about-button button button-linkedin' href='' target='_blank'>View LinkedIn</a>
            <a className='Home-about-button button button-contact' href='' target='_blank'>Contact Me</a>
          </div>
        </div >
      </div>
    </>
  );
}

export default Home;