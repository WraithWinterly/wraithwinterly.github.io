import React, { useState, useEffect, useId } from 'react';

import SkillsIcon from './SkillsIcon';

import './Skills.css';
import '../LoadingIcon';
import LoadingIcon from '../LoadingIcon';

function Skills() {
  const id = useId();

  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);
  const [reqTimes, setReqTimes] = useState(0);

  async function getShowCaseItems() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/json/skills.json');
      const data = await response.json();
      setData(data);
      setFailed(false);
    }
    catch {
      console.error('Error fetching skills items');
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

  return (
    <div className='Skills-container'>
      {data &&
        <div className='Skills-icons-container'>
          {data && data.map((skill, index) => {
            return <SkillsIcon key={`${id}-${index}`} name={skill.name} img={skill.img} link={skill.link} />;
          })}
        </div>
      }
      {!data && <LoadingIcon text={'Fetching Skills'} handleRefresh={() => { setFailed(false); setReqTimes(prev => prev + 1); }} failed={failed} />}
    </div>
  );
}

export default Skills;