import React from "react";
import "./Skills.css";

const Skills = () => {
  // Skills data with proficiency percentages
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 85 },
        { name: "TypeScript", proficiency: 75 },
        { name: "React", proficiency: 85 },
        { name: "Next.js", proficiency: 70 },
        { name: "Material-UI", proficiency: 80 },
        { name: "Bootstrap", proficiency: 85 },
      ],
    },
    {
      title: "Backend & Database",
      icon: "fas fa-database",
      skills: [
        { name: "Java", proficiency: 75 },
        { name: "PHP", proficiency: 70 },
        { name: "SQL", proficiency: 80 },
        { name: "Spring-Boot", proficiency: 70 },
        { name: "RESTful APIs", proficiency: 85 },
      ],
    },
    {
      title: "Development Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "GitHub", proficiency: 85 },
        { name: "NPM", proficiency: 80 },
        { name: "Yarn", proficiency: 75 },
        { name: "VSCode", proficiency: 90 },
        { name: "Postman", proficiency: 85 },
        { name: "Swagger", proficiency: 75 },
      ],
    },
    {
      title: "Testing & Design",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "Jest", proficiency: 70 },
        { name: "React Testing Library", proficiency: 70 },
        { name: "Figma", proficiency: 75 },
        { name: "Adobe XD", proficiency: 70 },
      ],
    },
  ];

  // No animation needed for this layout

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">
                <i className={category.icon}></i> {category.title}
              </h3>

              <div className="skills-row">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <i className="fas fa-check-circle skill-icon"></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
