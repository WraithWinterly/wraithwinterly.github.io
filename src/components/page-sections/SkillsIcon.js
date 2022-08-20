import React from 'react';

import './SkillsIcon.css';

function SkillsIcon({ name, img }) {

  console.log(img);

  return (
    <div className='SkillsIcon'>
      <div className='SkillsIcon-img' style={{ backgroundImage: `url(${img})` }}></div>
      <h3 className='SkillsIcon-name'>{name}</h3>
    </div>
  );
}

export default SkillsIcon;