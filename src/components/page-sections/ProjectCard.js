import React, { useId } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import './ProjectCard.css';

function ProjectCard({ name, desc, stack, link, linksrc, img }) {
  const id = useId();
  const windowSize = useWindowSize();

  const renderIcons = () => {
    return (
      <div className='ProjectCard-stack-container'>
        {stack.map((item, index) => {
          return (
            <img
              className='ProjectCard-stack-item'
              key={`${id}-${index}`}
              src={`https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/icons/${item}-icon.png`}
            ></img>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {windowSize.width < 950 && (
        <div className='ProjectCard'>
          <div className='ProjectCard-text'>
            <h1 className='accent-color'>{name}</h1>
            <p className='text-color-light'>{desc}</p>
          </div>
          <div className='ProjectCard-image-container-wrapper'>
            <div className='ProjectCard-image-container'>
              <img className='ProjectCard-image' src={img} alt={name} />
            </div>
          </div>
          <div className='ProjectCard-content'>
            <a className='button button-large' href={link} target='_blank' rel='noreferrer'>
              View
            </a>
            <a className='button button-large button-github' href={linksrc} target='_blank' rel='noreferrer'>
              View Source
            </a>
          </div>
          {renderIcons()}
        </div>
      )}
      {windowSize.width >= 950 && (
        <div className='ProjectCard'>
          <div>
            <div className='ProjectCard-text'>
              <h1 className='accent-color'>{name}</h1>
              <p className='text-color-light'>{desc}</p>
            </div>
            <div className='ProjectCard-content'>
              <a className='button button-large' href={link} target='_blank' rel='noreferrer'>
                View
              </a>
              <a className='button button-large button-github' href={linksrc} target='_blank' rel='noreferrer'>
                View Source
              </a>
            </div>
          </div>
          <div className='ProjectCard-image-container-wrapper'>
            <div className='ProjectCard-image-container'>
              <img className='ProjectCard-image' src={img} alt={name} />
            </div>
            {renderIcons()}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
