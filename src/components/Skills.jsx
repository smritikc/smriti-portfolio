import React from 'react';
import { FaCode, FaServer, FaTools, FaPaintBrush } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      description: "Modern frontend development with responsive design",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      description: "Server-side development and API integration",
      tags: ["PHP", ".NET", "ASP.NET Core", "REST APIs"],
    },
    {
      title: "Tools & QA",
      icon: <FaTools />,
      description: "Development tools and quality assurance processes",
      tags: ["Git & GitHub", "VS Code", "Manual Testing", "Test Cases", "Bug Reporting"],
    },
    {
      title: "Design Tools",
      icon: <FaPaintBrush />,
      description: "UI/UX design and multimedia creation",
      tags: ["Figma", "Canva", "DaVinci Resolve"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.icon} {category.title}</h3>
              <p>{category.description}</p>
              <div className="skill-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
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