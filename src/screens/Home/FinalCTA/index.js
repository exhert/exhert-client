import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./FinalCTA.module.sass";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Form from "../Form";
import { useTranslation } from "../../../utils/useTranslation";

const FinalCTA = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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
      <motion.div 
        className={styles.backgroundGradient}
        animate={{ 
          background: [
            "linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(15, 15, 30, 0.98))",
            "linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(20, 20, 50, 0.95))",
            "linear-gradient(135deg, rgba(20, 20, 50, 0.95), rgba(15, 15, 30, 0.98))",
            "linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(10, 10, 10, 0.95))"
          ]
        }}
        transition={{ 
          duration: 20, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <div className={cn("container", styles.container)}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className={cn("h2", styles.title)}
            variants={itemVariants}
          >
            {t('finalCtaTitle')}
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            variants={itemVariants}
          >
            {t('finalCtaDesc')}
          </motion.p>
          
          <motion.div 
            className={styles.formWrapper}
            variants={itemVariants}
          >
            <Form className={styles.waitlistForm} />
            
            <motion.div 
              className={styles.formInfo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className={styles.infoItem}>
                <motion.div 
                  className={styles.infoIcon}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <span>{t('limitedSpotsInfo')}</span>
              </div>
              
              <div className={styles.infoItem}>
                <motion.div 
                  className={styles.infoIcon}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.5
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 9L10.5 14.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <span>{t('noExtraInfo')}</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.socialProof}
            variants={itemVariants}
          >
            <div className={styles.avatarGroup}>
              <motion.div 
                className={styles.avatar}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={styles.avatar}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={styles.avatar}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={styles.avatar}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className={styles.avatarMore}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                +2.5k
              </motion.div>
            </div>
            <div className={styles.socialProofText}>
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0
                }}
              >
                {t('joinedThisWeek')}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.floatingElements}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className={cn(styles.floatingElement, styles.element1)}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className={cn(styles.floatingElement, styles.element2)}
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className={cn(styles.floatingElement, styles.element3)}
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default FinalCTA; 