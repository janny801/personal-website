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
    learnings: `The main technical skills that I learned using this project included Node.js, Socket.IO, OpenAI API. 

We furthered our understanding of the intricacies of API requests and responses to build a context-aware chatbot and PDF parsing system. 

We also had learned more about Node.js for server-side development, along with Socket.IO for real time communication, which allowed us to create a dynamic, and interactive web applicaiton. 

This project involved streamlining data handling and storage to optimize performance, ensuring accurate and efficient responses. 

Overall, it enhanced my skills in backend development, API integration, and real-time processing.`,
    experience: `I worked on this project alongside a group of 4 for HackTX 2024. We did not have a set idea going into the hackathon, and I personally found bouncing ideas off of each other very fun. 

To me, this whole experience was very inspiring, as it felt like a good contrast to the projects that we have to work on in a school setting. 

We were able to create something in a relatively short time frame that we had a strong interest in, which had kept us committed to try our best for this 2 day hackathon.`,
    link: 'https://github.com/janny801/hacktxproj',
    image: aiChatImage, // Image source for AI Chat and PDF Summarizer
  },
  {
    id: 2,
    name: 'Space Odyssey Project',
    learnings: `The main technical skills I learned during this project included C++, Object-Oriented Programming(OOP), and game logic design. 

I was able to apply object-oriented principles to design and implement classes for handling planets, spaceships, and random event-driven gameplay. 

This allowed me to create a dynamic and engaging game environment with resource management as a key feature. 

This project also allowed me to enhance my proficiency in managing dynamic events, and developing robust game logic.`,
    experience: `This was a final project for a C++ Object Oriented Programming class. 

Despite it being awhile since I have worked on this project, this class alongside with this project taught me the intricacies and abilities of OOP. 

I believe that this base of knowledge is very important in programming as a whole and helped me understand topics in greater detail for future classes and personal projects.`,
    link: 'https://github.com/janny801/Space-Odyssey-Project',
    image: spaceGameImage, // Assign the new space game image
  },
  {
    id: 3,
    name: 'Real-Time Chat Application',
    learnings: `The main technical skills I learned during this project included Node.js, JavaScript, and Socket.IO. 

I strengthened my understanding of WebSocket communication and real-time server management enabling me to create a responsive and interactive messaging system. 

This involved implementing dynamic user messaging, username assignment, and message broadcasting using Socket.IO. 

Overall, this project enhanced my skills in real-time communication, server-side development, and interactive web application design.`,
    experience: `I was currently in an Operating Systems class at the University of Houston, studying similar client-server programs, and had wanted to further my study on this topic. 

We were taught using C/C++ and personally found it quite difficult to understand this process without building one for myself. Although using different languages, and frameworks, this project helped me understand the theoretical applications of a client-server application.`,
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
      <h3 className="project-title">{currentProject.name}</h3>
  
      {/* Project details section */}
      <div className="project-details">
        <div className="project-details-section">
          <h3>What I Learned</h3>
          <p>{currentProject.learnings}</p>
        </div>
  
        <div className="project-details-section">
          <h3>My Experience Making It</h3>
          <p>{currentProject.experience}</p>
        </div>
  
        <div className="project-link-section">

          <h3>Check Out This Project Further</h3>
          <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
            {currentProject.name} on GitHub
          </a>
        </div>
      </div>
</div>
  );
}

export default Projects;
