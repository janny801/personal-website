// StarryBackground.js

import React, { useEffect, useRef } from 'react';
import './App.css';

function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 100;
    const maxDistance = 100; // Distance within which stars will move away from the mouse

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.5,
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
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const moveDistance = (maxDistance - distance) / maxDistance;
          star.x += Math.cos(angle) * moveDistance * 5; // Adjust movement speed as needed
          star.y += Math.sin(angle) * moveDistance * 5;
        }
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
