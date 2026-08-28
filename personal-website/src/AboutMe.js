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
          During my summer as a Software Engineering Intern at USAA, I worked within an Agile engineering team responsible for enterprise event-stream messaging and API management. My primary focus was designing and implementing an Event Catalog system using Java and Spring Boot, which created a centralized, searchable user interface and backend service to make Kafka events discoverable and accessible across multiple engineering teams. Through this project, I gained deep hands-on experience with event-driven architectures, enterprise software dependencies, and the complex ways distinct engineering units interoperate within a large-scale financial organization. Working alongside my industry mentor and team, I actively managed source code and deployment pipelines using Git and GitLab, ensuring secure, well-documented CI/CD integrations. Beyond technical development, I actively participated in USAA intern events, cross-functional workshops, and team learning sessions, expanding my professional network and deepening my understanding of production-grade systems design.
        </p>
        <p>
          At NASA’s Stennis Space Center, I developed and deployed a database that is still in active use, enabling personnel to easily access and analyze information on more than 1,000 NASA-funded research and development projects. Using Python with the mysql.connector and csv libraries, I wrote a script to pull raw project data stored in a MySQL database and export it into CSV files. I then automated the integration of this data into a SharePoint List via Power Automate, eliminating manual data entry and ensuring that project information remained consistently updated. To improve workflow efficiency and usability, I designed and implemented over twenty custom columns with dynamic field formatting—such as color coding and sortable filters—which allowed researchers to spend significantly less time searching for project details and more time conducting analysis.
        </p>
        <p>
          This project was highly collaborative and end-user focused: I worked closely with NASA researchers and personnel, gathering requirements during meetings and tailoring the database to their needs, ensuring it aligned with real-world use cases. By incorporating their feedback, I optimized the system for data accessibility, intuitive navigation, and analytical insights. Through this experience, I gained valuable exposure to cross-functional teamwork, agile problem solving, and iterative development, learning how to translate technical solutions into practical tools for diverse stakeholders.
        </p>
        <p>
          Beyond development, I also participated in internship networking events and cross-team discussions, where I collaborated with fellow interns and professionals, shared insights, and expanded my professional network within NASA’s community.
        </p>
        <p>
          During my time with the Society of Asian Scientists and Engineers (SASE), I first served as a Web Development Intern from January 2025 to May 2025, assisting the Web Development Officer with updating the chapter website, maintaining communication channels on Discord and GroupMe, and ensuring platform security. In this role, I began developing an automated points tracker that consolidated event data for over 400 members, reducing manual entry and streamlining engagement tracking. I also supported website updates, membership communications, and moderation efforts to maintain a safe and inclusive online community.
        </p>
        <p>
          Building on this foundation, I progressed to become the Web Development Officer for SASE, where I fully implemented the automated point tracking system, eliminating manual data entry for all events. I also developed an automated email system that welcomes new members and provides real-time event attendance confirmations with point totals, helping members better track their participation. In addition to continuing website and platform management, I introduced SEO optimization strategies, expanded Discord functionality with custom roles, bots, and extensions to boost engagement, and kept GroupMe and Linktree resources up to date. Beyond technical contributions, I actively volunteer with organizations like the Houston Food Bank and participate in SASE’s weekly professional and social events, where I strengthen my networking and communication skills while sharing feedback and experiences during workshops such as resume reviews and LinkedIn development sessions.
        </p>
        <p>
          My technical growth is driven by both academic and collaborative projects. From building an AI-driven PDF analyzer at HackTX to developing CoogMusic, a streaming platform for UH students, I enjoy applying my skills to create functional, user-focused applications. You can explore more of my work on GitHub.
        </p>
        <p>
          I find the most fulfillment in creating tools that solve real-world problems and help others within a team-driven environment. I am passionate about building impactful solutions and collaborating with others to turn innovative ideas into reality.
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
