import React, { useId } from 'react';
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
  ];


  const id = useId();

  return (
    <div className='showcase'>
      <h1 className='accent-color showcase-text'>Showcase</h1>
      <div className='card-container'>
        <div className='card-flexbox'>
          {showcase.map((card, index) => {
            return <ShowcaseCard key={`{${id}-${index}}`} name={card.name} desc={card.desc} stack={card.stack} link={card.link} img={card.img} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;