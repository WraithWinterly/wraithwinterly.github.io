import React from 'react';

import './ShowcaseCard.css';

function ShowcaseCard({ name, desc, stack, link, img }) {
  return (
    <div className='ShowcaseCard'>
      <h1 className='accent-color'>{name}</h1>
      <p className='text-color-light'>{desc}</p>
      <div className='ShowcaseCard-content'>
        <a className='button button-large' href={link} target='_blank' rel="noreferrer" >Visit Site</a>
        <div className='img-stack'>
          <img className='ShowcaseCard-image' src={img} alt='Showcase Card'></img>
          <p>{stack}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ShowcaseCard;