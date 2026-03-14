import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css';

function ContactMe() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [rockets, setRockets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      subject: subject,
      message: message,
      reply_to: 'jred8069@gmail.com',
    };

    emailjs
      .send('service_wgzofw4', 'template_2u6k3s5', templateParams, '0slSczrnYUnKkH5J-')
      .then((response) => {
        console.log('Email successfully sent!', response);

        setRockets((prevRockets) => [
          ...prevRockets,
          { id: Date.now() },
        ]);

        setName('');
        setSubject('');
        setMessage('');

        setTimeout(() => {
          setRockets((prevRockets) =>
            prevRockets.filter((rocket) => rocket.id !== Date.now())
          );
        }, 6000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the links below or send me a message directly.</p>

      {/* Contact Links and Icons */}
      <div className="contact-links" style={{ textAlign: 'center', color: '#fff' }}>
      <p>
        <strong>
          Location 
          <FaMapMarkerAlt style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
        </strong> 
        Houston, TX
      </p>
        <p><strong>Email:</strong> <a href="mailto:jred8069@gmail.com">jred8069@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+12016376539">+1 (201)-637-6539</a></p>
        
        {/* Social Icons Row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '15px', fontSize: '2rem' }}>
          <a href="https://linkedin.com/in/janredsal" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/janny801" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form" style={{ marginTop: '30px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          rows="5"
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-container">
          <div className="rocket">
            <div className="rocket-window"></div>
          </div>
          <div className="rocket-wings-container">
            <div className="rocket-wing-left"></div>
            <div className="rocket-wing-right"></div>
          </div>
          <div className="flame-container">
            <div className="flame"></div>
          </div>
          <div className="banner">Message sent!</div>
        </div>
      ))}
    </div>
  );
}

export default ContactMe;