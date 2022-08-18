import React, { useId } from 'react';
import ShowcaseCard from './ShowcaseCard';

import ShowCaseJSON from '../../data/showcaseProjects.json';

function Showcase() {
  const showcase = JSON.parse(JSON.stringify(ShowCaseJSON));
  showcase.push(showcase[0]);
  showcase.push(showcase[0]);
  showcase.push(showcase[0]);

  const id = useId();

  return (
    <div className='showcase' id='showcase'>
      <h1 className='accent-color showcase-text'>Showcase</h1>
      <div className='card-container'>
        <div className='card-flexbox'>
          {showcase.map((card, index) => {
            return <ShowcaseCard key={`{${id}-${index}}`} name={card.name} desc={card.desc} stack={card.stack} link={card.link} img={process.env.PUBLIC_URL + card.img} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;