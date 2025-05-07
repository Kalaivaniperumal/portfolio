import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "HEPL - Cavinkare Group Of Companies",
      period: "February 2023 - Present",
      responsibilities: [
        "Developed interactive and user-friendly web applications using React.js, HTML5, JavaScript, and TypeScript.",
        "Created reusable UI components such as forms, buttons, and tables to streamline the development process.",
        "Integrated front-end applications with RESTful APIs using Axios for seamless data retrieval.",
        "Utilized npm and Webpack for package management and module bundling.",
        "Enhanced application responsiveness using Bootstrap and CSS media queries.",
        "Successfully resolved 60% of product bugs, increasing product rate by 25%.",
        "Developed AI-based chatbots using Rasa Framework, applying NLP algorithms to improve user interaction.",
        "Collaborated with cross-functional teams to integrate chatbots into various applications.",
      ],
    },
    {
      title: "Software Support Engineer",
      company: "Trivetech",
      period: "August 2022 - January 2023",
      responsibilities: [
        "Played a critical role in migrating customers' infrastructure to a cloud environment, reducing hardware costs by 50% using JIRA software Cloud Support.",
        "Provided technical support to customers via email, phone, and chat.",
        "Diagnosed and resolved software issues, ensuring minimal downtime.",
        "Maintained detailed technical documentation to support future troubleshooting.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-period">{exp.period}</p>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
