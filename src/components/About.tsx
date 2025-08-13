import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Heart } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const languages = [
    { name: 'HTML5', icon: '🏗️' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'React', icon: '⚛️' }
  ];

  return (
    <motion.section 
      className="about" 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="story-card">
              <div className="story-header">
                <Heart className="story-icon" />
                <h3>My Journey</h3>
              </div>
              <p>
                At the turn of the century the nostalgia age took effect, and in doing so created an era of gentle blues and silver trimmed websites encasing picturesque fields. That promise of a bright future crept its way into my youth as I grew up along a father who worked on computers for a living.
              </p>
              <p>
                Though the times have changed and the path forward in technology is blossoming with all kinds of possibilities, my curiosity has only grown stronger. My interest in computers surpassed the intricacies of CPUs and parts, but rather the information that was being gathered and stored within code; the capabilities of a website to load and display images and text in an array of styles and fonts.
              </p>
              <p>
                It fascinated me and hopefully the wonder and admiration is replicated in the projects I work on and the sites that I code while I grow my tools and skills. Take a look at my projects and see what I have to offer, and if you like what you see, feel free to reach out to me. I am always looking for new opportunities to learn and grow in the field of web development. 🤖
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="skills-card">
              <div className="skills-header">
                <Code2 className="skills-icon" />
                <h3>My Languages</h3>
              </div>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="language-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="language-icon">{lang.icon}</div>
                    <span className="language-name">{lang.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="philosophy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="philosophy-header">
                <Lightbulb className="philosophy-icon" />
                <h3>Philosophy</h3>
              </div>
              <p>
                Where technology meets nature, innovation blooms. I believe in creating digital experiences that are not just functional, but sustainable and beautiful - like a garden where code grows organically. 🌱✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
