import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    const handleMobileMenuClick = () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    };

    const handleNavLinkClick = () => {
      navLinks.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    };

    // Smooth scrolling
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if(window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
      }
    };

    // Scroll animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.skill-card, .project-card, .education-card, .timeline-item, .contact-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      
      .skill-card, .project-card, .education-card {
        transition-delay: calc(var(--index, 0) * 0.1s);
      }
    `;
    document.head.appendChild(style);

    // Set animation indices
    document.querySelectorAll('.skill-card, .project-card, .education-card').forEach((card, index) => {
      card.style.setProperty('--index', index);
    });

    // Active navigation
    const setActiveNavLink = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');
      
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    // Hover effects
    document.querySelectorAll('.tag').forEach(tag => {
      tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Event listeners
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', handleMobileMenuClick);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', setActiveNavLink);

    // Photo upload simulation (optional)
const photoPlaceholder = document.querySelector('.photo-placeholder');
if (photoPlaceholder) {
  photoPlaceholder.addEventListener('click', function() {
    if(window.confirm('Would you like to upload your photo? (This is a demo feature)')) {
      this.innerHTML = `
        <i class="fas fa-check-circle" style="color: var(--success);"></i>
        <p>Photo Uploaded!</p>
        <small>Click to change</small>
      `;
    }
  });
}
    // Cleanup
    return () => {
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', handleMobileMenuClick);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', setActiveNavLink);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;