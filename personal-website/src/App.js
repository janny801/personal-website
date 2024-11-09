import React, { useState, useEffect } from 'react';
import StarryBackground from './StarryBackground';
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Janred Salubayba';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1)); // Using slice to avoid concatenation issues
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust speed as needed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [fullName]);

  return (
    <div className="App">
      <StarryBackground />
      <h1>{displayedText}</h1>
      <div>
        <button>Projects</button>
        <button>About Me</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default App;
