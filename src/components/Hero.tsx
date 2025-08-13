import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Palette } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const sections = [
    {
      id: 'discover',
      title: 'D i s c o v e r',
      content: 'Every day is a completely new experience with a plethora of events. My goal is to use the knowledge I acquire to integrate better and cleaner code into not only personal but professional projects.',
      icon: <Zap className="section-icon" />,
      delay: 0.2
    },
    {
      id: 'digitize',
      title: 'D i g i t i z e',
      content: 'The growing technological frontier allows websites to incorporate the most up-to-date programming, including various LLMs so that users may experience more personal interactions with their websites.',
      icon: <Cpu className="section-icon" />,
      delay: 0.4
    },
    {
      id: 'design',
      title: 'D e s i g n',
      content: 'Taking initiative with professional skills and tools to provide quality web development that display not just an aesthetic, but your business mission.',
      icon: <Palette className="section-icon" />,
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-grid">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`hero-card ${section.id}`}
            variants={sectionVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="card-header">
              <div className="icon-container">
                {section.icon}
              </div>
              <h3 className="card-title">{section.title}</h3>
            </div>
            <p className="card-content">{section.content}</p>
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
