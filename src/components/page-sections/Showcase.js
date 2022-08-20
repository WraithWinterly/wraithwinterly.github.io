import React, { useState, useEffect, useId } from 'react';
import ShowcaseCard from './ShowcaseCard';

import ShowCaseJSON from '../../data/showcaseProjects.json';

import LoadingIcon from '../LoadingIcon';

import './Showcase.css';

function Showcase() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);
  const [reqTimes, setReqTimes] = useState(0);

  async function getShowCaseItems() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/json/showcaseprojects.json');
      const data = await response.json();
      setData(data);
      setFailed(false);
      // Use testing data
      //setData(JSON.parse(JSON.stringify(ShowCaseJSON)));
    }
    catch {
      console.error('Error fetching showcase items');
      setData(null);
      setFailed(true);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getShowCaseItems();
    }, 500);
    return () => { clearTimeout(timeout); };
  }, [reqTimes]);

  const id = useId();

  return (
    <div className='Showcase-card-container-wrapper'>
      {data &&
        <div className='Showcase-card-container'>
          {data && data.map((card, index) => {
            return <ShowcaseCard key={`{${id}-${index}}`} name={card.name} desc={card.desc} stack={card.stack} link={card.link} img={card.img} />;
          })}
        </div>
      }
      {!data && <LoadingIcon text={'Fetching Showcase Items'} handleRefresh={() => { setFailed(false); setReqTimes(prev => prev + 1); }} failed={failed} />}
    </div>
  );
}

export default Showcase;