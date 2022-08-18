import React from 'react';

function ShowcaseCard({ name, desc, stack, link, img }) {
  return (
    <div className='showcase-card'>
      <h1 className='accent-color'>{name}</h1>
      <p className='secondary-color'>{desc}</p>
      <div className='showcase-content'>
        <a className='button lg' target='_blank' href={link}>Visit Site</a>
        <div className='img-stack'>
          <img src={img} alt='Card Image'></img>
          <p>{stack}</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default ShowcaseCard;