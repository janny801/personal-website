import React, { useState, useEffect } from 'react';
import StarryBackground from './StarryBackground';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Janred Salubayba";
  const typingSpeed = 150; // Adjust speed of typing in ms

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval); // Stop the interval once full text is displayed
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullName]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Adjust speed of blinking

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Router>
      <div className="App">
        <StarryBackground />
        <h1>{displayedText}<span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span></h1>
        <nav>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
