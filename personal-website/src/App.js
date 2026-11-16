import React, { useState, useEffect, useRef } from 'react';
import StarryBackground from './StarryBackground';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import astronautImage from './proj-images/astronautflying.webp';
import './App.css';

function NavigationHotkeys() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pressedKeys = new Set();

    const handleKeyDown = (event) => {
      // Don't trigger hotkeys if user is typing in an input, textarea, or contentEditable element
      const target = event.target;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (isInput) return;

      // Ignore shortcuts if modifier keys like Ctrl, Alt, Meta/Command are pressed
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      const key = event.key.toLowerCase();
      pressedKeys.add(key);

      // Check if both 'j' and 's' are pressed simultaneously for homepage
      if (pressedKeys.has('j') && pressedKeys.has('s')) {
        navigate('/');
        return;
      }

      // On /projects, 'j' and 'k' navigate left and right through projects
      if (location.pathname === '/projects' && (key === 'j' || key === 'k')) {
        return;
      }

      switch (key) {
        case 'p':
          navigate('/projects');
          break;
        case 'a':
          navigate('/about');
          break;
        case 'c':
          navigate('/contact');
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      pressedKeys.delete(event.key.toLowerCase());
    };

    const handleWindowBlur = () => {
      pressedKeys.clear();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [navigate, location.pathname]);

  return null;
}

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
    <Router basename={process.env.PUBLIC_URL}>
      <NavigationHotkeys />
      <div className="App">
        <StarryBackground scrollContainerRef={scrollContainerRef} />
        <div className="content" ref={scrollContainerRef}>
          {/* Make the name clickable */}
          <h1>
            <Link to="/" className="homepage-link">
              {displayedText}
              <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              <span className="key-badge name-key-badge">J + S</span>
            </Link>
          </h1>
          <nav>
            <Link to="/projects">
              Projects <span className="key-badge">P</span>
            </Link>
            <Link to="/about">
              About Me <span className="key-badge">A</span>
            </Link>
            <Link to="/contact">
              Contact Me <span className="key-badge">C</span>
            </Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <div className="empty-homepage">
                  {/* This renders the blank homepage */}
                </div>
              }
            />
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
                    <div className="speech-bubble-tail"></div>
                  </div>
                )}
                {index === 45 && (
                  <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
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
