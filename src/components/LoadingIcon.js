import React, { useRef } from 'react';

import './LoadingIcon.css';

function LoadingIcon({ text, handleRefresh, failed }) {
  const textRef = useRef(null);
  return (
    <div className='LoadingIcon' onClick={handleRefresh}>
      <div className="lds-ripple"><div></div><div></div></div>
      <h3 className={`LoadingIcon-text ${failed ? 'LoadingIcon-text-failed' : ''}`} ref={textRef}>{text + (failed ? ': Error Fetching Data' : '')}</h3>
    </div>
  );
}

export default LoadingIcon;