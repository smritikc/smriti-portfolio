import React from 'react';
import { FaGraduationCap, FaLanguage, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationItems = [
    {
      icon: <FaGraduationCap />,
      title: "BSc. Computer Science & IT",
      institution: "Padmakanya Multiple Campus (IOST)",
      duration: "2022 - 2026 (Expected)",
      details: "Tribhuvan University",
    },
    {
      icon: <FaLanguage />,
      title: "IELTS",
      institution: "British Council",
      duration: "2021",
      details: "Band Score: 7 out of 9",
    },
    {
      icon: <FaSchool />,
      title: "+2 Science",
      institution: "Galaxy Secondary School",
      duration: "2019 - 2021",
      details: "Grade: A",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          {educationItems.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                {item.icon}
              </div>
              <div className="education-content">
                <h3>{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-duration">{item.duration}</p>
                <p className="education-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;