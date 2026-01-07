import React from 'react';
import { FaGithub, FaLink, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/smritikc",
      label: "GitHub",
    },
    {
      icon: <FaLink />,
      link: "https://linktr.ee/smriti_k.c",
      label: "Linktree",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:smritikc588@gmail.com",
      label: "Email",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/smriti-kc/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Smriti K.C</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="copyright">&copy; 2024 Smriti K.C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;