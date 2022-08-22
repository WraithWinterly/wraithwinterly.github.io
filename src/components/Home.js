import React, { useEffect, useRef } from 'react';

import useWindowSize from '../hooks/useWindowSize';

import './Home.css';

function Home({ offsetY }) {
  const homeRef = useRef(null);

  const size = useWindowSize();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.innerHeight <= 500) {
        homeRef.current.scrollIntoView();
      }
    }, 25);
    return () => { clearTimeout(timeout); };
  }, []);

  return (
    <>
      {/* Space out absolute home content from rest of the page */}
      <div id='home' ref={homeRef} style={{ height: 'max(120vh, 600px)' }}></div>

      {offsetY - 300 < size.height &&
        <div className='Home-about'>
          <div className='Home-content'>
            <div className='Home-content-text'>
              <em style={{ color: 'pink' }}>Warning: This site is not yet ready nor complete.</em>
              <h1>I am <span className='accent-color'>Ayden Springer</span>.</h1>
              <h2>Building <span className='accent-color'>Front End </span>Applications.</h2>
              <p className='text-color-light'>Web developer previously in game development. A passionate, motivated programmer. Building accessible, stunning, and high quality products.</p>
            </div>
            <div className='Home-about-buttons-container'>
              <a className='Home-about-button button button-github' href='https://github.com/WraithWinterly/wraithwinterly.github.io' target='_blank' rel="noreferrer">View Source</a>
              <a className='Home-about-button button button-github' href='https://github.com/WraithWinterly' target='_blank' rel="noreferrer">View Github</a>
              <a className='Home-about-button button button-twitterr' href='https://twitter.com/WraithWinterly' target='_blank' rel="noreferrer">View Twitter</a>
              <a className='Home-about-button button button-linkedin' href='https://wraithwinterly.github.io' target='_blank' rel="noreferrer">View LinkedIn</a>
              <a className='Home-about-button button button-contact' href='#contact'>Contact Me</a>
            </div>
          </div >
        </div>
      }
      {/* About section */}
    </>
  );
}

export default Home;