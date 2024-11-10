import React, { useEffect, useRef } from 'react';
import './App.css';

function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 300;
    const maxDistance = 120; // Distance within which stars will move away from the mouse
    const driftSpeed = 0.2; // Speed of horizontal drift

    // Set canvas size to the window's width and height
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight; // Set height to full document height to accommodate scrolling
    };

    // Create the stars
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

    // Draw the stars on the canvas
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before each draw
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

    // Update the stars' positions and effects
    function updateStars() {
      stars.forEach((star) => {
        // Twinkle effect for selective stars
        if (star.twinkle) {
          star.size = star.baseSize + Math.sin(Date.now() * star.twinkleFactor) * 0.3;
          star.opacity = star.baseOpacity + Math.sin(Date.now() * star.twinkleFactor) * 0.2;
        }

        // Horizontal drifting effect
        star.x += driftSpeed;

        // Mouse avoidance effect with increased responsiveness
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const moveDistance = (maxDistance - distance) / maxDistance;
          star.x += Math.cos(angle) * moveDistance * 10; // Increased movement speed
          star.y += Math.sin(angle) * moveDistance * 10;
        }

        // Wrap stars around edges
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
    }

    function animate() {
      updateStars();
      drawStars();
      requestAnimationFrame(animate); // Recursive call to animate continuously
    }

    createStars();
    animate();

    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resizing and scrolling to adjust canvas size
    const handleResizeOrScroll = () => {
      updateCanvasSize();
      stars.length = 0; // Clear existing stars
      createStars(); // Recreate stars with new dimensions
    };

    // Adjust canvas on resize and scroll
    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll); // Add scroll listener

    // Initial canvas setup
    updateCanvasSize();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-background"></canvas>;
}

export default StarryBackground;
