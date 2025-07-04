/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import aiChatImage from './proj-images/aichatappandpdfsummarizer.png';
import realTimeChatImage from './proj-images/realtimechatapp.png';
import spaceGameImage from './proj-images/spacegame.png';
import personalWebpageImage from './proj-images/personalwebpage.png'; // Import the new image
import onenoteFixAHK from './proj-images/onenoteFixAHK.gif'; // Import the OneNote Navigation Fix GIF
import customFolderIconImage from './proj-images/customFolderIcon.jpg';


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
    learnings: `The main technical skills I learned creating this project included React.js, Email.js, JavaScript, CSS, real-time rendering, and event-driven programming. 

I learned how to use state management and routing in React, particularly using React Router to navigate between sections of the website. 

I also learned how to implement custom animations and effects such as the dynamic starry background. This involved using event-driven programming to detect user interactions. 

Additionally, using Email.js in the "Contact Me" section allowed me to integrate a seamless email submission feature. 

Overall, this project allowed me to expand my front-end development skills and gain experience in creating interactive web applications.`,
    experience: `This project was a personal endeavor to showcase my current portfolio and technical skills. 

I also used it as an opportunity to learn React.js, which is something that I had wanted to learn for a while in my aspirations to become a flexible full-stack developer.`,
    link: 'https://github.com/janny801/personal-webpage',
    image: personalWebpageImage, // Image source for Personal Webpage
  }, 

  //new for coog music proj 
  {
    id: 5,
    name: 'CoogMusic',
    learnings: `Most of my previous project and work experience in the field was done independently, so this was a valuable opportunity to work on a collaborative project. 

    I learned how to split up tasks efficiently while accommodating everyone's busy schedules, since this was created for a group project assignment in class. 

    While I continued sharpening my technical skills, I felt that my biggest growth was in learning how to work as a team to meet deadlines — an experience that gave me practical, real-world development insight.`,
experience: `As briefly noted above, this was a 5-member group project for a class.

I was mainly in charge of the backend side of the project, including communicating with the database via queries, setting up the database structure, and designing how we would store data — using Azure MySQL for structured data and Azure Blob Storage for songs and images.

I also contributed to writing backend endpoints that communicated with the frontend, allowing users to send and receive the data they needed to interact with the platform.`,
    link: 'https://coogmusic.com/',
    image: null // Leave as null or undefined, and handle with iframe when rendering
  }, 

  {
  id: 6,
  name: 'OneNote Navigation Fix (AHK)',
learnings: `I learned how to use AHK scripting to solve certain problems. Despite being a simple project, it allowed me to learn how to get hardware user input and translate it to a desired output. 

I also learned how to keep track of what is on the screen and enable the script only during specific times (when the OneNote app is open on Windows).`,
experience: `I usually use the OneNote app on macOS, which allows for these features, but I was not able to do so on the Windows version of the OneNote desktop app. 

This is one of the things I love about programming — it allows me to solve simple problems, customize things, and fix issues I encounter.`,
  link: 'https://github.com/janny801/onenote-navigation-ahk-fix',

  image: onenoteFixAHK,
}, 

{
  id: 7,
  name: 'Custom Folder Icon Tool for Windows 11',
learnings: `This project helped me understand how batch scripting works on Windows and how to use system commands to manipulate folder attributes and UI behavior.

It also gave me a better understanding of how Windows handles folder metadata and icon caching.`,
experience: `I wanted to have custom folder icons to make it easier to tell which folder is which at a glance.

I tried downloading other apps to achieve this, but none of them worked reliably. So I decided to make my own solution, which is one of the main things that intrigues me about software development — being able to solve personal problems with custom tools.`,
  link: 'https://github.com/janny801/custom-folder-icons-windows',
  image: customFolderIconImage
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
      <h2 className="projects-heading">Projects</h2>
  
      {/* Slideshow container */}
      <div className="slideshow">
        <div className="project-image">
          {currentProject.id === 5 ? (
            <div className="iframe-wrapper">
              <iframe
                src={currentProject.link}
                title="CoogMusic"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          ) : (
            <img src={currentProject.image} alt={currentProject.name} />
          )}

          {/* Arrows are now inside the project-image box for consistent placement */}
          <span className="arrow left-arrow" onClick={prevProject}>&lt;</span>
          <span className="arrow right-arrow" onClick={nextProject}>&gt;</span>
        </div>

          

      </div>
      

      <div className="dot-indicator">
  {projectData.map((_, index) => (
    <span
      key={index}
      className={`dot ${index === currentProjectIndex ? 'active' : ''}`}
    ></span>
  ))}
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
            Visit {currentProject.name}
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default Projects;
