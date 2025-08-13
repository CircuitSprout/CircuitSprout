import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="header"
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="header-content">
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Replace placeholder with actual logo */}
          <div className="logo-container-inner">
            <img 
              src="/Circuit Sprout.png" 
              alt="Circuit Sprout Logo" 
              className="logo-image"
            />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
