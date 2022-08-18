import React from 'react';

function Home() {
  return (
    <div className='about-me' id='about-me'>
      <div className='content'>
        <div className='text-area'>
          <em style={{ color: 'pink' }}>Warning: This site is not yet ready nor complete.</em>
          <h1>I am <span className='accent-color'>Ayden Springer</span>.</h1>
          <h2>I build <span className='accent-color'>digital experiences</span>.</h2>
          <p className='secondary-color'>Web developer previously in game development. A passionate, motivated programmer. Building accessible, stunning, and high quality products.</p>
        </div>
        <div className='button-container'>
          <a href='https://github.com/WraithWinterly/wraithwinterly.github.io' target='_blank' className='button github'>View Source</a>
          <a href='https://github.com/WraithWinterly' target='_blank' className='button github'>View Github</a>
          <a href='https://twitter.com/WraithWinterly' target='_blank' className='button twitter'>View Twitter</a>
          <a href='' target='_blank' className='button linkedin'>View LinkedIn</a>
          <a href='' target='_blank' className='button contact'>Contact Me</a>
        </div>
      </div >
    </div>
  );
}

export default Home;