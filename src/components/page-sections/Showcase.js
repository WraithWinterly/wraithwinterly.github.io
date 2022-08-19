import React, { useId } from 'react';
import ShowcaseCard from './ShowcaseCard';

import ShowCaseJSON from '../../data/showcaseProjects.json';

import './Showcase.css';

function Showcase() {
  const showcase = JSON.parse(JSON.stringify(ShowCaseJSON));
  // showcase.push(showcase[0]);
  // showcase.push(showcase[0]);
  // showcase.push(showcase[0]);

  const id = useId();

  return (
    <div className='Showcase' id='showcase'>
      <h1 className='Showcase-text accent-color'>Showcase</h1>
      <div className='Showcase-card-container-wrapper'>
        <div className='Showcase-card-container'>
          {showcase.map((card, index) => {
            return <ShowcaseCard key={`{${id}-${index}}`} name={card.name} desc={card.desc} stack={card.stack} link={card.link} img={process.env.PUBLIC_URL + card.img} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;