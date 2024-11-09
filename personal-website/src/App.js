import React from 'react';
import StarryBackground from './StarryBackground';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <StarryBackground />
        <h1>Janred Salubayba</h1>
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
