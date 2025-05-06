import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Your Name</h1>
          <h2 className="title">Your Title / Position</h2>
          <p className="description">
            A brief description about yourself and what you do. Highlight your
            key skills and what makes you unique in your field.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>
            <button className="btn secondary-btn">Download CV</button>
          </div>
        </div>
        <div className="image-container">
          {/* Replace with your profile image */}
          <div className="profile-image-placeholder">
            <span>Your Image</span>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-icon">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
