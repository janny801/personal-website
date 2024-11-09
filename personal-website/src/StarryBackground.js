import React, { useEffect } from 'react';
import './App.css';

const StarryBackground = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.starry-background');

    if (!starContainer) {
      console.error('Star container not found');
      return;
    }

    const starCount = 100;
    starContainer.innerHTML = '';

    // Create stars and position them randomly
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starContainer.appendChild(star);
    }

    // Mousemove event to apply parallax effect to stars
    const handleMouseMove = (e) => {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => {
        const speed = Math.random() * 5 + 1;
        const x = (window.innerWidth - e.clientX * speed) / 100;
        const y = (window.innerHeight - e.clientY * speed) / 100;
        star.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="starry-background"></div>;
};

export default StarryBackground;
