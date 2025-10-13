/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import selfImage1 from './proj-images/selfimage1.jpeg';
import selfImage2 from './proj-images/selfimage2.png';
import selfImage3 from './proj-images/selfimage3.png';
import resumePDF from './proj-images/janred_resume_2526.pdf';
import './App.css';

function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [ selfImage2, selfImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="aboutme-container">
      <h2 className="aboutme-heading">About Me</h2>

      {/* About Me text */}
      <div className="about-me-text">
        <p>
          I am a Computer Science student at the University of Houston Honors College, graduating in May 2027 with a capstone in cybersecurity.
        </p>
        <p>
          I previously interned as a Database Developer at NASA’s Stennis Space Center, where I built a database that automated data integrations for 1,000+ projects, and worked with researchers to improve accessibility and workflow efficiency.
        </p>
        <p>
          Currently, I serve as the Web Development Officer for the Society of Asian Scientists and Engineers (SASE), after first contributing as a Web Development Intern. In this role, I built automation systems that track engagement and streamline communications for over 400 members, while continuing to enhance the chapter’s digital presence through its website, Discord server, Linktree, and other online platforms.        </p>
        <p>
          Additionally through projects, I’ve applied my skills in both collaborative and academic settings. For example, at the HackTX hackathon I built an AI-driven chat and PDF analysis tool that gives tailored feedback based on the type of document, and in a database class I created CoogMusic, a Spotify-like streaming platform for UH students. These experiences reinforced my abilities in C++, JavaScript, Node.js, React, MySQL, and Microsoft Azure, and you can explore more of my work on GitHub.
        </p>
        <p>
          I am seeking opportunities in Software Engineering Internships focused on full-stack or backend development, as well as Data Analysis roles and Cybersecurity projects where I can contribute to innovative teams, strengthen my technical skills, and create solutions that make a real impact.
        </p>
      </div>


      {/* Slideshow container
      <div className="slideshow">
        <div className="aboutme-image">
          <img
            src={images[currentImageIndex]}
            alt="Janred Salubayba pic"
          />
        </div>
        <div className="arrow-container">
          <span className="arrow left-arrow" onClick={prevImage}>
            &lt;
          </span>
          <span className="arrow right-arrow" onClick={nextImage}>
            &gt;
          </span>
        </div>
      </div> */}

      {/* Resume Button */}
      <button className="resume-button" onClick={openModal}>
        View My Resume
      </button>

      {/* Modal for Resume */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  <iframe
    src={resumePDF}
    title="Janred Salubayba Resume"
    style={{ width: '100%', height: '100%', border: 'none' }}
  />
  <button className="close-button" onClick={closeModal}>
    Close
  </button>
</div>

        </div>
      )}
    </div>
  );
}

export default AboutMe;
