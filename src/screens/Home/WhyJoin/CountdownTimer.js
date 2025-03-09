import React, { useState, useEffect } from 'react';
import styles from './WhyJoin.module.sass';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-04-30T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Clear interval if we reach the target date
      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
      }
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
              strokeDashoffset: 339.292 * (1 - (timeLeft.days % 365) / 365)
            }}
            initial={{ strokeDashoffset: 339.292 }}
            animate={{ strokeDashoffset: 339.292 * (1 - (timeLeft.days % 365) / 365) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.text 
            x="60" 
            y="65" 
            className={styles.countdownText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            transform="rotate(90, 60, 65)"
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
            transform="rotate(90, 60, 65)"
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
            transform="rotate(90, 60, 65)"
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
            transform="rotate(90, 60, 65)"
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