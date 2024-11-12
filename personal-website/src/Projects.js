import React, { useState } from 'react';

const projectData = [
  {
    id: 1,
    name: 'AI Chat and PDF Summarizer',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/hacktxproj'
  },
  {
    id: 2,
    name: 'Space Odyssey Project',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/Space-Odyssey-Project'
  },
  {
    id: 3,
    name: 'Real-Time Chat Application',
    learnings: 'What I learned goes here.',
    experience: 'My experience making it goes here.',
    link: 'https://github.com/janny801/real-time-chat-app'
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
          <h3>Project {currentProject.id}: {currentProject.name}</h3>
          <p>Placeholder image for project {currentProject.id}</p>
        </div>
        <span className="arrow right-arrow" onClick={nextProject}>&gt;</span>
      </div>

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
