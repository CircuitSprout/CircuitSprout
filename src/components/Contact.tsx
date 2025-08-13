import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <motion.footer 
      className="contact" 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact-card">
              <div className="contact-header">
                <Mail className="contact-icon" />
                <h3>Get In Touch</h3>
              </div>
              <p>
                Ready to bring your ideas to life? Let's create something amazing together! 
                I'm always excited to work on new projects and collaborate with fellow innovators.
              </p>
              
              <div className="contact-links">
                <motion.a
                  href="mailto:CletcherAFCircuit@gmail.com"
                  className="contact-link email-link"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="link-icon" />
                  <span>CletcherAFCircuit@gmail.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/CircuitSprout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link github-link"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="link-icon" />
                  <span>GitHub Portfolio</span>
                  <ExternalLink className="external-icon" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/alexandria-cletcher-800b93320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link linkedin-link"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="link-icon" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="external-icon" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="growth-visualization">
              <div className="circuit-tree">
                <div className="tree-trunk"></div>
                <div className="tree-branches">
                  <div className="branch branch-1"></div>
                  <div className="branch branch-2"></div>
                  <div className="branch branch-3"></div>
                </div>
                <div className="circuit-nodes">
                  <div className="node node-1"></div>
                  <div className="node node-2"></div>
                  <div className="node node-3"></div>
                  <div className="node node-4"></div>
                </div>
                <div className="leaves">
                  <span className="leaf">🌱</span>
                  <span className="leaf">💚</span>
                  <span className="leaf">⚡</span>
                  <span className="leaf">✨</span>
                </div>
              </div>
              <p className="growth-text">
                "Where technology grows, innovation flourishes"
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Circuit Sprout. Built with 💚 and sustainable code practices.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Contact;
