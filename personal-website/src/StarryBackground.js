// StarryBackground.js

import React, { useEffect, useRef } from 'react';
import './App.css';

function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 300;
    const maxDistance = 100; // Distance within which stars will move away from the mouse

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          baseSize: Math.random() * 2 + 1, // Base size for twinkle effect
          opacity: Math.random() * 0.5 + 0.5,
          baseOpacity: Math.random() * 0.5 + 0.5, // Base opacity for twinkle effect
          twinkle: Math.random() < 0.2, // Only 20% of stars will twinkle
          twinkleFactor: Math.random() * 0.03 + 0.01, // Speed of twinkle (reduced for subtlety)
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    }

    let mouseX = -1000; // Initially off-screen
    let mouseY = -1000;

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function updateStars() {
      stars.forEach((star) => {
        // Twinkle effect for selective stars
        if (star.twinkle) {
          star.size = star.baseSize + Math.sin(Date.now() * star.twinkleFactor) * 0.3;
          star.opacity = star.baseOpacity + Math.sin(Date.now() * star.twinkleFactor) * 0.2;
        }

        // Horizontal drifting effect
        star.x += 0.1; // Adjust this value for speed of horizontal drift

        // Mouse avoidance effect
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const moveDistance = (maxDistance - distance) / maxDistance;
          star.x += Math.cos(angle) * moveDistance * 3; // Adjust movement speed as needed
          star.y += Math.sin(angle) * moveDistance * 3;
        }

        // Wrap stars around edges
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
    }

    function animate() {
      updateStars();
      drawStars();
      requestAnimationFrame(animate);
    }

    createStars();
    animate();

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-background"></canvas>;
}

export default StarryBackground;
