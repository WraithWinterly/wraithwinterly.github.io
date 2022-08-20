import React from 'react';

import './SkillsIcon.css';

function SkillsIcon({ name, img, link }) {
  return (
    <a className='SkillsIcon' href={link} target='_blank' rel="noreferrer">
      <div className='SkillsIcon-img' style={{ backgroundImage: `url(${img})` }}></div>
      <h3 className='SkillsIcon-name'>{name}</h3>
    </a>
  );
}

export default SkillsIcon;