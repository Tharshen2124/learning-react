import React from 'react';
import { useToggle } from './useToggle';

export default function CustomHook() {  
  const [isVisible, toggle] = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );

}

