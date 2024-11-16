import React, { useState, useEffect, useRef } from 'react';
import StarryBackground from './StarryBackground';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import astronautImage from './proj-images/astronautflying.webp';
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [spacers, setSpacers] = useState(Array.from({ length: 10 }));
  const scrollContainerRef = useRef();
  const spacerLimitReached = useRef(false);
  const fullName = "Janred Salubayba";
  const typingSpeed = 150;
  const maxSpacers = 50;

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullName]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Infinite scroll with limits
  useEffect(() => {
    if (spacerLimitReached.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setSpacers((prevSpacers) => {
            if (prevSpacers.length >= maxSpacers) {
              spacerLimitReached.current = true;
              observer.disconnect(); // Stop observing once limit is reached
              return prevSpacers;
            }
            return [...prevSpacers, ...Array.from({ length: 10 })];
          });
        }
      },
      { threshold: 1.0 }
    );

    const lastSpacer = document.querySelector('.infinite-scroll-end');
    if (lastSpacer) {
      observer.observe(lastSpacer);
    }

    return () => {
      observer.disconnect();
    };
  }, [spacers]);

  return (
    <Router>
      <div className="App">
        <StarryBackground scrollContainerRef={scrollContainerRef} />
        <div className="content" ref={scrollContainerRef}>
          <h1>
            {displayedText}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h1>
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
          <div className="infinite-scroll-container">
            {spacers.map((_, index) => (
              <div
                key={index}
                className={`spacer ${index === 44 ? 'spacer-44' : index === 45 ? 'spacer-45' : ''}`}
              >
                {index === 44 && (
                  <div className="speech-bubble">
                    Thank you for visiting my website! 
                  </div>
                )}
                {index === 45 && (
                  <img
                    src={astronautImage}
                    alt="Astronaut"
                    className="astronaut-image"
                  />
                )}
              </div>
            ))}
            <div className="infinite-scroll-end"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
