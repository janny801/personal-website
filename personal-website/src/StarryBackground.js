import React, { useEffect, useRef } from 'react';
import './App.css';

function StarryBackground({ scrollContainerRef }) {
  const canvasRef = useRef(null);  // Ref for the canvas

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 300;
    const maxDistance = 120; // Distance within which stars will move away from the mouse
    const driftSpeed = 0.2; // Speed of horizontal drift

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars with random positions and properties
    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,  // Initial position of stars
          initialY: Math.random() * canvas.height, // Store initial Y position
          size: Math.random() * 2 + 1,
          baseSize: Math.random() * 2 + 1, // Base size for twinkle effect
          opacity: Math.random() * 0.5 + 0.5,
          baseOpacity: Math.random() * 0.5 + 0.5, // Base opacity for twinkle effect
          twinkle: Math.random() < 0.2, // Only 20% of stars will twinkle
          twinkleFactor: Math.random() * 0.03 + 0.01, // Speed of twinkle (reduced for subtlety)
        });
      }
    }

    // Draw stars on the canvas
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

    // Handle mouse movement to affect stars
    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    // Handle scroll event based only on current scroll position
    function handleScroll() {
      let currentScrollY = 0;
      if (scrollContainerRef.current) {
        currentScrollY = scrollContainerRef.current.scrollTop;
      } else {
        currentScrollY = window.scrollY;
      }

      console.log("Current ScrollY:", currentScrollY);

      // Move stars based on scroll position (inverted movement)
      stars.forEach((star) => {
        // Twinkle effect for selective stars
        if (star.twinkle) {
          star.size = star.baseSize + Math.sin(Date.now() * star.twinkleFactor) * 0.3;
          star.opacity = star.baseOpacity + Math.sin(Date.now() * star.twinkleFactor) * 0.2;
        }

        // Apply vertical movement based on scroll position (inverted movement)
        // Adjust the multiplier for smoother scrolling effect
        star.y = star.initialY - currentScrollY * 0.1;

        // Ensure stars stay within the vertical bounds of the canvas (wrap around if needed)
        // Use modulo to wrap stars vertically within the canvas
        star.y = (star.y + canvas.height) % canvas.height;

        // Horizontal drifting effect
        star.x += driftSpeed;

        // Mouse avoidance effect
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const moveDistance = (maxDistance - distance) / maxDistance;
          star.x += Math.cos(angle) * moveDistance * 10;
          star.y += Math.sin(angle) * moveDistance * 10;
        }

        // Wrap stars around edges horizontally
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
      });
    }

    function animate() {
      handleScroll();
      drawStars();
      requestAnimationFrame(animate);
    }

    createStars();
    animate();

    // Attach event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Resize canvas if the window is resized
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0; // Clear existing stars
      createStars(); // Recreate stars with new dimensions
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollContainerRef]);

  return <canvas ref={canvasRef} className="starry-background"></canvas>;
}

export default StarryBackground;
