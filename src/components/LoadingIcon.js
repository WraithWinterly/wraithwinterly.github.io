import React, { useRef } from 'react';

import './LoadingIcon.css';

function LoadingIcon({ text, handleRefresh, failed, ignoreUser }) {
  const textRef = useRef(null);
  return (
    <>
      {ignoreUser &&
        <div className='LoadingIcon'>
          <div className="lds-ripple"><div></div><div></div></div>
          <pre className={`LoadingIcon-text`}>{text}</pre>
        </div>
      }
      {!ignoreUser &&
        <div className='LoadingIcon LoadingIcon-with-hover' onClick={handleRefresh}>
          <div className="lds-ripple"><div></div><div></div></div>
          <pre className={`LoadingIcon-text ${failed ? 'LoadingIcon-text-failed' : ''}`} ref={textRef}>{text + (failed ? ': Error Fetching Data' : '')}</pre>
        </div>
      }
    </>
  );
}

LoadingIcon.defaultProps = {
  ignoreUser: false,
};

export default LoadingIcon;