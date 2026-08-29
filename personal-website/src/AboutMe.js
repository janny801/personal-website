/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import selfImage1 from './proj-images/selfimage1.jpeg';
import selfImage2 from './proj-images/selfimage2.png';
import selfImage3 from './proj-images/selfimage3.png';
import resumePDF from './proj-images/jansalfa26.pdf';
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
          I am a Computer Science student at the University of Houston Honors College, graduating in December 2026 with a capstone in cybersecurity.
        </p>
        <p>
          <strong>USAA — Software Engineering Intern (May 2026 – August 2026):</strong> Working within an Agile event-stream messaging and API management team, I designed and implemented an Event Catalog system using Java and Spring Boot. This delivered a centralized service and searchable interface to make Kafka events discoverable across enterprise engineering units, backed by robust CI/CD pipelines in GitLab.
        </p>
        <p>
          <strong>NASA Stennis Space Center — Software Engineering Intern (January 2024 – May 2024):</strong> I developed and deployed an automated database system still in active use to track over 1,000 NASA-funded R&amp;D projects. Utilizing Python, MySQL, and Power Automate, I eliminated manual entry by streaming database records into SharePoint with custom dynamic field formatting, collaborating closely with researchers to streamline technical workflows.
        </p>
        <p>
          <strong>Society of Asian Scientists and Engineers (SASE) — Web Development Officer (January 2025 – Present):</strong> Advancing from Web Development Intern to Web Development Officer, I engineered an automated points tracker managing event engagement for 400+ members and developed an automated email notification system. I also lead website maintenance, SEO enhancements, and platform engagement across Discord and community channels while actively mentoring and volunteering.
        </p>
        <p>
          My passion lies in creating tools that solve real-world problems. Whether building production-grade enterprise services or collaborative student applications, I thrive in team environments where innovative ideas turn into impactful solutions.
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

      {/* GitHub Button */}
      <a
        href="https://github.com/janny801"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button github-button"
      >
        Check Out My GitHub
      </a>

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
