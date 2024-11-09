import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      subject: subject,
      message: message,
      reply_to: 'jred8069@gmail.com' // replace this with your own email if you want replies to come to your email
    };

    emailjs.send('service_wgzofw4', 'template_2u6k3s5', templateParams, '0slSczrnYUnKkH5J-')
      .then((response) => {
        console.log('Email successfully sent!', response);
        setStatus('Message sent successfully!');
        // Clear the form fields after successful submission
        setName('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the links below or send me a message directly.</p>

      <div className="contact-links">
        <p><strong>Location: </strong>  Houston, TX</p>
        <p><strong>Email:</strong> <a href="mailto:jred8069@gmail.com">jred8069@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+12016376539">+1 (201) 637-6539</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/janredsal" target="_blank" rel="noopener noreferrer">linkedin.com/in/janredsal</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/janny801" target="_blank" rel="noopener noreferrer">github.com/janny801</a></p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
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
      
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default ContactMe;
