import React from 'react';
import ShowcaseCard from './ShowcaseCard';

import PFP256 from '../assets/pfp256.png';
import TasksUltra from '../assets/cardImages/TasksUltra.png';

function Showcase() {
  const showcase = [
    {
      name: 'This site',
      desc: 'WraithWinterly\'s Portfolio',
      stack: ['html', 'scss', 'react'],
      link: '',
      img: PFP256,
    },
    {
      name: 'Tasks Ultra',
      desc: 'Task Management app with Javascript',
      stack: ['html', 'css', 'js'],
      link: 'https://tasksultra.netlify.app/',
      img: TasksUltra,
    },
    {
      name: 'Tasks Ultra',
      desc: 'Task Management app with Javascript',
      stack: ['html', 'css', 'js'],
      link: 'https://tasksultra.netlify.app/',
      img: TasksUltra,
    },
    {
      name: 'Tasks Ultra',
      desc: 'Task Management app with Javascript',
      stack: ['html', 'css', 'js'],
      link: 'https://tasksultra.netlify.app/',
      img: TasksUltra,
    },
  ];
  return (
    <div className='showcase'>
      <h1 className='accent-color showcase-text'>Showcase</h1>
      <div className='card-grid'>
        {showcase.map(card => {
          return <ShowcaseCard name={card.name} desc={card.desc} stack={card.stack} link={card.link} img={card.img} />;
        })}
      </div>
    </div>
  );
}

export default Showcase;