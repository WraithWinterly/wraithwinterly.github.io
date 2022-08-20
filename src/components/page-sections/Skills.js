import React from 'react';

import SkillsIcon from './SkillsIcon';

import './Skills.css';

function Everplast() {
  const getIcon = icon => {
    return `https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/icons/${icon}-icon.png`;
  };
  return (
    <div className='Skills-container'>
      <div className='Skills-icons-container'>
        <SkillsIcon name={'HTML5'} img={getIcon('html')} />
        <SkillsIcon name={'CSS3'} img={getIcon('css')} />
        <SkillsIcon name={'JavaScript'} img={getIcon('javascript')} />
        <SkillsIcon name={'React'} img={getIcon('react')} />
        <SkillsIcon name={'Godot'} img={getIcon('godot')} />
        <SkillsIcon name={'Unity'} img={getIcon('unity')} />
        <SkillsIcon name={'C#'} img={getIcon('csharp')} />
      </div>
    </div>
  );
}

export default Everplast;