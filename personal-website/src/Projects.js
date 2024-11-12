import React, { useState } from 'react';
import aiChatImage from './proj-images/aichatappandpdfsummarizer.png';
import realTimeChatImage from './proj-images/realtimechatapp.png';
import spaceGameImage from './proj-images/spacegame.png';
import personalWebpageImage from './proj-images/personalwebpage.png'; // Import the new image
import './App.css';


const projectData = [
  {
    id: 1,
    name: 'AI Chat and PDF Summarizer',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/hacktxproj',
    image: aiChatImage, // Image source for AI Chat and PDF Summarizer
  },
  {
    id: 2,
    name: 'Space Odyssey Project',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/Space-Odyssey-Project',
    image: spaceGameImage, // Assign the new space game image
  },
  {
    id: 3,
    name: 'Real-Time Chat Application',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/real-time-chat-app',
    image: realTimeChatImage, // Image source for Real-Time Chat Application
  },
  {
    id: 4,
    name: 'Personal Webpage',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/personal-webpage',
    image: personalWebpageImage, // Image source for Personal Webpage
  }
];

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex - 1 + projectData.length) % projectData.length
    );
  };

  const currentProject = projectData[currentProjectIndex];
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Here are my projects.</h2>
  
      {/* Slideshow container */}
      <div className="slideshow">
        <div className="project-image">
          {currentProject.image ? (
            <img src={currentProject.image} alt={currentProject.name} />
          ) : (
            <p>Placeholder image for project {currentProject.id}</p>
          )}
        </div>
  
        {/* Arrow container for bottom positioning on mobile */}
        <div className="arrow-container">
          <span className="arrow left-arrow" onClick={prevProject}>&lt;</span>
          <span className="arrow right-arrow" onClick={nextProject}>&gt;</span>
        </div>
      </div>
      
      {/* Project name below the image */}
      <h3 className="project-title">Project {currentProject.id}: {currentProject.name}</h3>
  
      {/* Project details section */}
      <div className="project-details">
        <h3>What I Learned</h3>
        <p>{currentProject.learnings}</p>
  
        <h3>My Experience Making It</h3>
        <p>{currentProject.experience}</p>
  
        <h3>Check Out This Project Further</h3>
        <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
          {currentProject.name} on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
