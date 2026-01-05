import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "Present",
      company: "Aeric Tech",
      role: "Front-End Web Developer (Intern)",
      description: "Developed responsive web interfaces and collaborated with development teams.",
    },
    {
      date: "2023-2024",
      company: "Jaycees Everest Secondary School",
      role: "Teaching Assistant",
      description: "Taught Grade 10 students in Mathematics and Computer Science subjects.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <p className="timeline-role">{exp.role}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;