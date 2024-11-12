import React, { useState } from 'react';
import aiChatImage from './proj-images/aichatappandpdfsummarizer.png';
import realTimeChatImage from './proj-images/realtimechatapp.png'; // Import the image

const projectData = [
  {
    id: 1,
    name: 'AI Chat and PDF Summarizer',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/hacktxproj',
    image: aiChatImage, // Add image source here
  },
  {
    id: 2,
    name: 'Space Odyssey Project',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/Space-Odyssey-Project',
    image: null, // Add image source if available
  },
  {
    id: 3,
    name: 'Real-Time Chat Application',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/real-time-chat-app',
    image: realTimeChatImage, // Assign the image source
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
        <span className="arrow left-arrow" onClick={prevProject}>&lt;</span>
        <div className="project-image">
          {currentProject.image ? (
            <img src={currentProject.image} alt={currentProject.name} />
          ) : (
            <p>Placeholder image for project {currentProject.id}</p>
          )}
        </div>
        <span className="arrow right-arrow" onClick={nextProject}>&gt;</span>
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
