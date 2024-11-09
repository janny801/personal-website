import React, { useState, useEffect } from 'react';
import StarryBackground from './StarryBackground';
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = 'Janred Salubayba';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust speed as needed

    return () => clearInterval(typingInterval);
  }, [fullName]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Adjust speed of blinking

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="App">
      <StarryBackground />
      <h1>{displayedText}<span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span></h1>
      <div>
        <button>Projects</button>
        <button>About Me</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default App;
