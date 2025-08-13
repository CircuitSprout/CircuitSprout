import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-links">
          <button 
            className="nav-link active"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About Me
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
