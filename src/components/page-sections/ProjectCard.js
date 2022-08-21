import React, { useId } from 'react';

import './ProjectCard.css';

function ProjectCard({ name, desc, stack, link, linksrc, img }) {
  const id = useId();
  return (
    <div className='ProjectCard' style={{ backgroundImage: `url(${img})` }}>
      <div className='ProjectCard-text'>
        <h1 className='accent-color'>{name}</h1>
        <p className='text-color-light'>{desc}</p>
      </div>
      <div className='ProjectCard-content'>
        <a className='button button-large' href={link} target='_blank' rel="noreferrer" >View</a>
        <a className='button button-large button-github' href={linksrc} target='_blank' rel="noreferrer" >View Source</a>
      </div>
      <div className='ProjectCard-stack-container'>
        {stack.map((item, index) => {
          return (
            <img className='ProjectCard-stack-item' key={`${id}-${index}`} src={`https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/icons/${item}-icon.png`}></img>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;