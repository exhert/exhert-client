import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Security.module.sass";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "../../../utils/useTranslation";

const Security = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [supportHours, setSupportHours] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // Animate the support hours counter
      let startValue = 0;
      const endValue = 24;
      const duration = 1500; // 1.5 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const valueIncrement = (endValue - startValue) / totalFrames;
      
      let currentFrame = 0;
      const counter = setInterval(() => {
        currentFrame++;
        const newValue = Math.min(startValue + (valueIncrement * currentFrame), endValue);
        setSupportHours(newValue);
        
        if (currentFrame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    } else {
      controls.start("hidden");
      setSupportHours(0);
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className={cn("section", styles.section)} ref={ref}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className={cn("h2", styles.title)}>{t('securityTitle')}</h2>
            <p className={styles.description}>{t('securityDesc')}</p>
            
            <motion.div 
              className={styles.supportContainer}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div 
                className={styles.supportBadge}
                variants={itemVariants}
              >
                <div className={styles.supportIcon}>
                  <motion.svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.path 
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path 
                      d="M12 6V12L16 14" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.svg>
                </div>
                <div className={styles.supportInfo}>
                  <div className={styles.supportValue}>
                    {Math.round(supportHours)}/7
                  </div>
                  <div className={styles.supportLabel}>{t('supportAvailable')}</div>
                  <div className={styles.supportSubtext}>{t('evenDuringWaitlist')}</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className={styles.learnMoreButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('learnSecurity')}
            </motion.button>
          </motion.div>
          
          <motion.div 
            className={styles.securityBadgeContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div 
              className={styles.badgeGlow}
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(27, 57, 187, 0.3)",
                  "0 0 60px rgba(27, 57, 187, 0.5)",
                  "0 0 30px rgba(27, 57, 187, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
            
            <motion.div 
              className={styles.securityBadge}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.badgeInner}>
                <div className={styles.badgeIcon}>
                  <motion.svg 
                    viewBox="0 0 120 120" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.path 
                      d="M60 20L25 35V65C25 83.5 40 100.5 60 105C80 100.5 95 83.5 95 65V35L60 20Z" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path 
                      d="M60 50V70" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.path 
                      d="M60 50C63.3137 50 66 47.3137 66 44C66 40.6863 63.3137 38 60 38C56.6863 38 54 40.6863 54 44C54 47.3137 56.6863 50 60 50Z" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                    />
                    <motion.path 
                      d="M60 85C63.3137 85 66 82.3137 66 79C66 75.6863 63.3137 73 60 73C56.6863 73 54 75.6863 54 79C54 82.3137 56.6863 85 60 85Z" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
                    />
                  </motion.svg>
                </div>
                <div className={styles.badgeText}>
                  <div className={styles.badgeTitle}>{t('exhertSecure')}</div>
                  <div className={styles.badgeSubtitle}>{t('builtForProtection')}</div>
                </div>
              </div>
              <motion.div 
                className={styles.badgeShine}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
            
            <div className={styles.certifications}>
              <motion.div 
                className={styles.certBadge}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className={styles.certIcon}>SSL</div>
                <div className={styles.certText}>{t('encryption')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Security; 