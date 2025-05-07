import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create particles
    const particleCount = 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    
    setParticles(newParticles);
    
    // Animation loop
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            particle.speedX *= -1;
            newX = particle.x + particle.speedX;
          }
          
          if (newY <= 0 || newY >= 100) {
            particle.speedY *= -1;
            newY = particle.y + particle.speedY;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    };
    
    const animationId = setInterval(animateParticles, 50);
    
    return () => clearInterval(animationId);
  }, []);
  
  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: isDarkMode ? "#ff6b00" : "#ff6b00"
          }}
        />
      ))}
      
      {/* Add some larger, slower moving particles for depth */}
      <div className="particle-overlay"></div>
    </div>
  );
};

export default ParticlesBackground;

