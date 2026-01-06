import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode, FaBalanceScale, FaGem } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Town Treasure",
      icon: <FaGem />, // Changed from FaTreasureChest to FaGem
      description: "A web application for discovering local treasures and hidden gems in your town.",
      link: "https://town-treasure-five.vercel.app/",
      linkText: "View Code",
      iconLink: <FaExternalLinkAlt />,
    },
    {
      title: "Bar Council Nepal Clone",
      icon: <FaBalanceScale />,
      description: "Responsive website clone of Bar Council Nepal with modern UI/UX.",
      link: "https://github.com/smritikc/html-css-projects",
      linkText: "View Code",
      iconLink: <FaGithub />,
    },
    {
      title: "Other Projects on Vercel",
      icon: <FaLaptopCode />,
      description: "More projects deploymed on Vercel showcasing my frontend development skills.",
      link: "https://vercel.com/smriti-s-projects-2e730710",
      linkText: "Live Demo",
      iconLink: <FaExternalLinkAlt />,
    },
    
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img">
                {project.icon}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.iconLink} {project.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;