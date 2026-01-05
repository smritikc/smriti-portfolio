import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "smritikc830@gmail.com",
      link: "mailto:smritikc830@gmail.com",
      type: "email",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+977-9865505771",
      link: "tel:+9779865505771",
      type: "phone",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Bagbazar, Kathmandu, Nepal",
      type: "text",
    },
    {
      icon: <FaGlobe />,
      title: "Portfolio",
      content: "linktr.ee/smriti_k.c",
      link: "https://linktr.ee/smriti_k.c",
      type: "link",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-info">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">
                {item.icon}
              </div>
              <div>
                <h3>{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target={item.type === 'link' ? '_blank' : '_self'}
                    rel={item.type === 'link' ? 'noopener noreferrer' : ''}
                    style={item.type === 'email' ? { fontSize: 'small' } : {}}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;