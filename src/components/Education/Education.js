import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "Krishnasamy College of Engineering and Technology",
      period: "2017 - 2019",
      cgpa: "8.0",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "St. Joseph College of Arts and Science",
      period: "2014 - 2017",
      cgpa: "7.9",
    },
    {
      degree: "Higher Secondary",
      institution: "St. Joseph Matriculation Higher Secondary School",
      period: "2014",
      cgpa: "7.4",
    },
  ];

  return (
    <section id="education" className="education-section section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-container">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <div className="education-info">
                  <p className="education-period">{edu.period}</p>
                  <p className="education-cgpa">CGPA: {edu.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="interpersonal-skills">
          <h3 className="skills-heading">Interpersonal Skills</h3>
          <div className="skills-list">
            <div className="skill-tag">Team Work</div>
            <div className="skill-tag">Adaptability</div>
            <div className="skill-tag">Consistency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
