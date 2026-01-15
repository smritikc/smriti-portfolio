import React, { useState, useEffect, useMemo } from 'react';
import { FaEnvelope, FaEye } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase, FaServer } from 'react-icons/fa';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Original text exactly as in your HTML
  const originalText = `React.js development, responsive web design, and modern JavaScript practices, dedicated to creating seamless user experiences through clean, maintainable code and intuitive interfaces.`;

  // Define which parts are highlighted
  const highlightRanges = useMemo(() => [
    { start: 0, end: 19 },           // "React.js development"
    { start: 21, end: 41 },          // "responsive web design"
    { start: 47, end: 73 }           // "modern JavaScript practices"
  ], []);

  // Function to check if a character index should be highlighted
  const isHighlighted = useMemo(() => {
    return (index) => {
      return highlightRanges.some(range => index >= range.start && index <= range.end);
    };
  }, [highlightRanges]);

  // Render text with gradient color
  const renderTextWithGradient = () => {
    const text = displayedText || '';
    const typingProgress = currentIndex / originalText.length;
    
    // Split text into characters and apply gradient
    return text.split('').map((char, index) => {
      const isHighlight = isHighlighted(index);
      const charProgress = index / originalText.length;
      
      // Calculate gradient position (0 to 1)
      const gradientPosition = charProgress;
      
      return (
        <span 
          key={`char-${index}`}
          className={isHighlight ? 'highlight' : ''}
          style={{
            background: `linear-gradient(90deg, 
              #2563eb 0%, 
              #7c3aed 25%, 
              #ec4899 50%, 
              #f59e0b 75%, 
              #10b981 100%
            )`,
            backgroundSize: '400% 100%',
            backgroundPosition: `${gradientPosition * 300}% 50%`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            fontWeight: isHighlight ? '600' : '400',
          }}
        >
          {char}
        </span>
      );
    });
  };

  // Alternative: Simple gradient without per-character positioning
  const renderSimpleGradientText = () => {
    const text = displayedText || '';
    
    return (
      <span
        style={{
          background: 'linear-gradient(90deg, #2563eb, #7c3aed, #ec4899, #f59e0b, #10b981, #2563eb)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradientFlow 8s linear infinite',
        }}
      >
        {text}
      </span>
    );
  };

  // Option 3: Static gradient with typing effect
  const renderStaticGradientWithTyping = () => {
    const text = displayedText || '';
    
    return (
      <>
        <span
          style={{
            background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {text}
        </span>
        {/* Add cursor when typing */}
        {currentIndex < originalText.length && (
          <span className="typing-cursor"></span>
        )}
      </>
    );
  };

  // Option 4: Your original style with gradient
  const renderOriginalStyleWithGradient = () => {
    const text = displayedText || '';
    const segments = [];
    let lastIndex = 0;

    // Process each highlight range
    highlightRanges.forEach((range, rangeIndex) => {
      // Add text before highlight
      if (range.start > lastIndex) {
        const normalText = text.substring(lastIndex, Math.min(range.start, text.length));
        if (normalText) {
          segments.push(
            <span key={`normal-${rangeIndex}`} className="normal-text">
              {normalText}
            </span>
          );
        }
      }
      
      // Add highlighted text
      const highlightText = text.substring(
        Math.max(range.start, lastIndex), 
        Math.min(range.end + 1, text.length)
      );
      if (highlightText) {
        segments.push(
          <span key={`highlight-${rangeIndex}`} className="highlight gradient-highlight">
            {highlightText}
          </span>
        );
      }
      
      lastIndex = range.end + 1;
    });
    
    // Add remaining text after last highlight
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      if (remainingText) {
        segments.push(
          <span key="normal-end" className="normal-text">
            {remainingText}
          </span>
        );
      }
    }
    
    return segments;
  };

  // Tech icons data
  const techIcons = useMemo(() => [
    { Icon: FaHtml5, className: 'html', x: 30, y: 0, delay: 0 },
    { Icon: FaCss3Alt, className: 'css', x: 0, y: 100, delay: 0.3 },
    { Icon: FaJs, className: 'js', x: 0, y: 280, delay: 0.6 },
    { Icon: FaReact, className: 'react', x: 60, y: 400, delay: 0.9 },
    { 
      component: <div className="tailwind-icon">TW</div>, 
      className: 'tailwind', 
      x: 380, 
      y: 20, 
      delay: 1.2 
    },
    { Icon: FaNodeJs, className: 'node', x: 480, y: 60, delay: 1.5 },
    { Icon: FaPhp, className: 'php', x: 450, y: 150, delay: 1.8 },
    { Icon: FaDatabase, className: 'mongodb', x: 410, y: 330, delay: 2.1 },
    { Icon: FaServer, className: 'render', x: 370, y: 360, delay: 2.4 },
  ], []);

  // Start typing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isTyping || currentIndex >= originalText.length) return;

    const timer = setTimeout(() => {
      setDisplayedText(originalText.substring(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, originalText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Frontend Developer</h1>
            <p className="tagline">
              {/* Choose one rendering method: */}
              {renderStaticGradientWithTyping()}
            </p>
            <div className="cta-buttons">
              <a 
                href="https://linktr.ee/smriti_k.c" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope /> Contact Me
              </a>
              <button 
                className="btn btn-outline"
                onClick={scrollToProjects}
              >
                <FaEye /> View Projects
              </button>
            </div>
          </div>
          
          <div className="photo-section">
            <div className="photo-container">
              <div className="photo-frame">
                <div className="photo-placeholder">
                  <img 
                    src="/skc img 1.jpeg" 
                    alt="Smriti K.C" 
                    className="profile-photo"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/350x350/2563eb/ffffff?text=SK";
                    }}
                  />
                </div>
                <div className="floating-elements">
                  <div className="floating-element"></div>
                  <div className="floating-element"></div>
                  <div className="floating-element"></div>
                </div>
              </div>
              
              <div className="colorful-icons">
                {techIcons.map((tech, index) => (
                  <div
                    key={index}
                    className={`color-icon ${tech.className}`}
                    style={{
                      '--x': `${tech.x}px`,
                      '--y': `${tech.y}px`,
                      '--delay': `${tech.delay}s`,
                    }}
                  >
                    {tech.Icon ? <tech.Icon /> : tech.component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;