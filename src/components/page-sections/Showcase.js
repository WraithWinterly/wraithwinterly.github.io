import React, { useState, useEffect, useId } from 'react';
import ShowcaseCard from './ShowcaseCard';

import ShowCaseJSON from '../../data/showcaseProjects.json';

import './Showcase.css';

function Showcase() {
  const [data, setData] = useState([]);

  async function getShowCaseItems() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/json/showcaseprojects.json');
      const data = await response.json();
      setData(data);
      // Use testing data
      //setData(JSON.parse(JSON.stringify(ShowCaseJSON)));
    }
    catch {
      console.error('Error fetching showcase items');
    }
  }

  useEffect(() => {
    getShowCaseItems();
  }, []);

  const id = useId();

  return (
    <div className='Showcase' id='showcase'>
      <h1 className='Showcase-text accent-color'>Showcase</h1>
      <div className='Showcase-card-container-wrapper'>
        <div className='Showcase-card-container'>
          {data && data.map((card, index) => {
            return <ShowcaseCard key={`{${id}-${index}}`} name={card.name} desc={card.desc} stack={card.stack} link={card.link} img={card.img} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;