import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import styles from './LanguageToggle.module.sass';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const variants = {
    initial: { 
      opacity: 0,
      y: -20,
      scale: 0.8
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.1
      }
    },
    exit: { scale: 0 }
  };

  return (
    <motion.button 
      className={styles.languageToggle}
      onClick={toggleLanguage}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      aria-label="Toggle language"
    >
      <div className={styles.toggleInner}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={language} 
            className={styles.languageContent}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
          >
            <span className={styles.languageText}>
              {language === 'en' ? 'FR' : 'EN'}
            </span>
            <motion.div 
              className={styles.globe}
              animate={{ 
                rotate: [0, 360] 
              }}
              transition={{ 
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12H22" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className={styles.glow}></div>
      </div>
    </motion.button>
  );
};

export default LanguageToggle; 