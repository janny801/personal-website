import React from 'react';
import './App.css'; // Or './AboutMe.css' if you're using a separate CSS file

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <p className="about-me-text">
        I'm a passionate computer science student at the University of Houston with a deep interest in technology and innovation.
      </p>
      <p className="about-me-text">
        My experience spans roles like developing databases for NASA and creating interactive applications, from AI-driven chatbots to real-time web platforms.
      </p>
      <p className="about-me-text">
        I enjoy working on projects that bridge technical skill and creativity, constantly aiming to improve user experiences through efficient design and functionality. With a focus on continuous learning, I'm excited to make impactful contributions in technology-driven fields.
      </p>
    </div>
  );
}

export default AboutMe;
