import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

function AboutMe() {
  return (
    <ParallaxLayer>
      <div className='about-me'>
        <div className='content'>
          <em style={{ color: 'pink' }}>Warning: This site is not yet ready nor complete.</em>
          <h1>I am <span className='accent-color'>Ayden Springer</span>.</h1>
          <h2>I build <span className='accent-color'>digital experiences</span>.</h2>
          <p className='secondary-color'>Web developer previously in game development. A passionate, motivated programmer. Building accessible, stunning, and high quality products.</p>
          <div className='button-container'>
            <a href='https://github.com/WraithWinterly/wraithwinterly.github.io' target='_blank' className='button github'>View Source</a>
            <a href='https://github.com/WraithWinterly' target='_blank' className='button github'>View Github</a>
            <a href='https://twitter.com/WraithWinterly' target='_blank' className='button twitter'>View Twitter</a>
            <a href='' target='_blank' className='button linkedin'>View LinkedIn</a>
            <a href='' target='_blank' className='button contact'>Contact Me</a>
          </div>
        </div >
      </div>
    </ParallaxLayer>
  );
}

export default AboutMe;