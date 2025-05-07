import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">KALAIVANI P</h1>
          <h2 className="title">Front-End Developer</h2>
          <p className="description">
            Software Developer with 2 years of hands-on experience in building responsive web applications using React.js.
            Adept at developing reusable UI components, integrating APIs, and collaborating with cross-functional teams.
            Strong expertise in chatbot development using Rasa Framework with applied NLP algorithms.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>
            <button className="btn secondary-btn">Download CV</button>
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
