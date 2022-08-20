import React from 'react';

import './PageSection.css';

function PageSection({ headerText, contentJSX, id, noPadding }) {
  return (
    <div className='PageSection' id={id && id}>
      <div className='PageSection-header'>
        <h1 className='PageSection-header-text'>{headerText}</h1>
      </div>
      <div className='PageSection-content' style={noPadding && { padding: '0px' }}>
        {contentJSX}
      </div>
    </div>
  );
}

export default PageSection;