import React, { useState, useEffect } from 'react';
import styles from './WhyJoin.module.sass';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Reset timer when it reaches zero
                days = 60;
                hours = 12;
                minutes = 30;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={styles.countdownContainer}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div 
        className={styles.countdownItem}
        variants={countdownVariants}
      >
        <svg viewBox="0 0 120 120" className={styles.countdownSvg}>
          <circle cx="60" cy="60" r="54" className={styles.countdownCircleBg} />
          <motion.circle 
            cx="60" 
            cy="60" 
            r="54" 
            className={styles.countdownCircle}
            style={{
              strokeDashoffset: 339.292 * (1 - timeLeft.days / 7)
            }}
            initial={{ strokeDashoffset: 339.292 }}
            animate={{ strokeDashoffset: 339.292 * (1 - timeLeft.days / 7) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.text 
            x="60" 
            y="65" 
            className={styles.countdownText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {timeLeft.days}
          </motion.text>
        </svg>
        <motion.span 
          className={styles.countdownLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Days
        </motion.span>
      </motion.div>
      
      <motion.div 
        className={styles.countdownItem}
        variants={countdownVariants}
      >
        <svg viewBox="0 0 120 120" className={styles.countdownSvg}>
          <circle cx="60" cy="60" r="54" className={styles.countdownCircleBg} />
          <motion.circle 
            cx="60" 
            cy="60" 
            r="54" 
            className={styles.countdownCircle}
            style={{
              strokeDashoffset: 339.292 * (1 - timeLeft.hours / 24)
            }}
            initial={{ strokeDashoffset: 339.292 }}
            animate={{ strokeDashoffset: 339.292 * (1 - timeLeft.hours / 24) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.text 
            x="60" 
            y="65" 
            className={styles.countdownText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {timeLeft.hours}
          </motion.text>
        </svg>
        <motion.span 
          className={styles.countdownLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Hours
        </motion.span>
      </motion.div>
      
      <motion.div 
        className={styles.countdownItem}
        variants={countdownVariants}
      >
        <svg viewBox="0 0 120 120" className={styles.countdownSvg}>
          <circle cx="60" cy="60" r="54" className={styles.countdownCircleBg} />
          <motion.circle 
            cx="60" 
            cy="60" 
            r="54" 
            className={styles.countdownCircle}
            style={{
              strokeDashoffset: 339.292 * (1 - timeLeft.minutes / 60)
            }}
            initial={{ strokeDashoffset: 339.292 }}
            animate={{ strokeDashoffset: 339.292 * (1 - timeLeft.minutes / 60) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.text 
            x="60" 
            y="65" 
            className={styles.countdownText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {timeLeft.minutes}
          </motion.text>
        </svg>
        <motion.span 
          className={styles.countdownLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Minutes
        </motion.span>
      </motion.div>
      
      <motion.div 
        className={styles.countdownItem}
        variants={countdownVariants}
      >
        <svg viewBox="0 0 120 120" className={styles.countdownSvg}>
          <circle cx="60" cy="60" r="54" className={styles.countdownCircleBg} />
          <motion.circle 
            cx="60" 
            cy="60" 
            r="54" 
            className={styles.countdownCircle}
            style={{
              strokeDashoffset: 339.292 * (1 - timeLeft.seconds / 60)
            }}
            initial={{ strokeDashoffset: 339.292 }}
            animate={{ strokeDashoffset: 339.292 * (1 - timeLeft.seconds / 60) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.text 
            x="60" 
            y="65" 
            className={styles.countdownText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {timeLeft.seconds}
          </motion.text>
        </svg>
        <motion.span 
          className={styles.countdownLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Seconds
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default CountdownTimer; 