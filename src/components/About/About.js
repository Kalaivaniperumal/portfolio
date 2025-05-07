import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Developer based in Cuddalore, Tamil Nadu, India with 2 years of professional experience
              specializing in front-end development and chatbot solutions.
            </p>
            
            <p>
              My goal is to build my career by making the best use of my analytical, creative, and logical skills
              to perform my job efficiently. I'm passionate about creating intuitive user interfaces and implementing
              intelligent solutions that enhance user experience.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Kalaivani P</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Cuddalore, Tamil Nadu, India</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">kalaivaniimca5297@gmail.com</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Phone:</span>
                <span className="info-value">+91 8608886792</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;