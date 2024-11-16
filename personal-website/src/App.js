import React, { useState, useEffect, useRef } from 'react';
import StarryBackground from './StarryBackground';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import astronautImage from './proj-images/astronautflying.webp'; // Import astronaut image
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [spacers, setSpacers] = useState(Array.from({ length: 10 })); // Initial invisible spacers
  const [showAstronaut, setShowAstronaut] = useState(false); // State to toggle astronaut visibility
  const observerRef = useRef();
  const scrollContainerRef = useRef(); // Reference for the scroll container
  const fullName = "Janred Salubayba";
  const typingSpeed = 150; // Adjust speed of typing in ms
  const maxSpacers = 50; // Set the maximum number of spacers

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

  // Infinite scroll observer with a maximum spacer limit
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Add more invisible spacers only if the current number is less than maxSpacers
        setSpacers((prevSpacers) => {
          if (prevSpacers.length < maxSpacers) {
            return [...prevSpacers, ...Array.from({ length: 10 })];
          } else {
            observerRef.current.disconnect(); // Stop observing once the limit is reached
            return prevSpacers;
          }
        });
      }
    });

    const lastSpacer = document.querySelector('.infinite-scroll-end');
    if (lastSpacer) {
      observerRef.current.observe(lastSpacer);
    }

    return () => {
      if (lastSpacer) {
        observerRef.current.unobserve(lastSpacer);
      }
    };
  }, [spacers]);

  // Show astronaut when scrolled to the bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const isAtBottom =
          scrollContainer.scrollHeight - scrollContainer.scrollTop ===
          scrollContainer.clientHeight;
        setShowAstronaut(isAtBottom); // Show astronaut if scrolled to the bottom
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <StarryBackground scrollContainerRef={scrollContainerRef} /> {/* Pass scrollContainerRef */}
        <div className="content" ref={scrollContainerRef}>
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
          <div className="infinite-scroll-container">
            {spacers.map((_, index) => (
              <div key={index} className="spacer"></div>
            ))}
            <div className="infinite-scroll-end"></div>
          </div>
        </div>

        {/* Conditional rendering for astronaut */}
        {showAstronaut && (
          <div className="astronaut-container">
            <img src={astronautImage} alt="Astronaut sending a message" className="astronaut-image" />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
