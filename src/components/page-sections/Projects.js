import React, { useState, useEffect, useId } from 'react';
import ProjectCard from './ProjectCard';
import PageSection from './PageSection';
//import json from '../../data/projects.json';

import LoadingIcon from '../LoadingIcon';

import './Projects.css';

function Projects() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);
  const [reqTimes, setReqTimes] = useState(0);

  async function getProjectData() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/WraithWinterly/wraithwinterly.github.io/fetch/json/projects.json');
      const data = await response.json();
      setData(data);
      setFailed(false);
      // Use testing data
      //setData(JSON.parse(JSON.stringify(json)));
    } catch {
      console.error('Error Fetching Data');
      setData(null);
      setFailed(true);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getProjectData();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [reqTimes]);

  const createCardJSX = (data) => {
    return (
      <div className='Projects-card-container-wrapper'>
        {data && (
          <div className='Projects-card-container'>
            {data &&
              data.map((card, index) => {
                return (
                  <ProjectCard
                    key={`{${id}-${index}}`}
                    name={card.name}
                    desc={card.desc}
                    stack={card.stack}
                    link={card.link}
                    linksrc={card.linksrc}
                    img={card.img}
                  />
                );
              })}
          </div>
        )}
      </div>
    );
  };

  const id = useId();

  return (
    <>
      {data && (
        <>
          <PageSection headerText={'Web Applications'} contentJSX={createCardJSX(data.filter((val) => val.type === 'webapp'))} />
          <PageSection headerText={'Web Pages'} contentJSX={createCardJSX(data.filter((val) => val.type === 'webpage'))} />
          <PageSection headerText={'Games'} contentJSX={createCardJSX(data.filter((val) => val.type === 'game'))} />
        </>
      )}
      {!data && (
        <LoadingIcon
          text={'Fetching Data'}
          handleRefresh={() => {
            setFailed(false);
            setReqTimes((prev) => prev + 1);
          }}
          failed={failed}
        />
      )}
    </>
  );
}

export default Projects;
