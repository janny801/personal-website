import React, { useState } from 'react';
import selfImage1 from './proj-images/selfimage1.jpeg';
import selfImage2 from './proj-images/selfimage2.png';
import selfImage3 from './proj-images/selfimage3.png';
import resumePDF from './proj-images/janredres.pdf';
import './App.css';

function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [selfImage1, selfImage2, selfImage3];
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
    I'm a passionate computer science student at the University of Houston with interests in technology, and fitness.
  </p>
  <p>
  My experience includes working as a database development and management intern at NASA as well as personal projects ranging from AI-driven apps to Windows scripting tools.
</p>

  <p>
    I am also a member of the Society of Asian Scientists and Engineers (SASE) at the University of Houston where I'm focusing on enhancing my soft skills and career preparation.
  </p>
  <p>
    I served as the Web Development Intern for SASE during the Spring 2025 semester and am currently the Web Development Officer for the Fall 2025 – Spring 2026 school year.
  </p>
  <p>
    As someone who spends a lot of time on the internet, I find inspiration in the projects and websites that I come across. This fuels my passion to create projects that blend technical ability and creativity.
  </p>
  <p>
    Currently, I'm seeking internship opportunities in software development or database management and development, where I can apply my skills and continue learning. Recently, I've also been developing an interest in cybersecurity, expanding my understanding of technology’s critical role in secure data management. With a focus on continuous growth, I'm excited to make impactful contributions in technology-driven fields.
  </p>
</div>


      {/* Slideshow container */}
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
      </div>

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
