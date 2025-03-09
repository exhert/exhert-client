import React, { useState, useEffect } from 'react';
import styles from './WhyJoin.module.sass';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../../utils/useTranslation';

const CountdownTimer = () => {
  const { t } = useTranslation();
  
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

      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const padNumber = (num) => String(num).padStart(2, '0');

  const glitchVariants = {
    initial: { opacity: 1, y: 0, scale: 1 },
    glitch1: { 
      opacity: [1, 0.8, 1],
      x: [0, -2, 2, 0],
      scale: [1, 1.02, 0.98, 1],
      transition: {
        duration: 0.2,
        times: [0, 0.2, 0.8, 1]
      }
    },
    glitch2: {
      opacity: [1, 0.9, 1],
      x: [0, 2, -2, 0],
      scale: [1, 0.98, 1.02, 1],
      transition: {
        duration: 0.15,
        times: [0, 0.3, 0.7, 1]
      }
    }
  };

  return (
    <div className={styles.digitalClockContainer}>
      <motion.div 
        className={styles.digitalDisplay}
        initial="initial"
        animate={["glitch1", "glitch2"]}
        variants={glitchVariants}
      >
        <div className={styles.timeUnit}>
          <motion.span 
            className={styles.number}
            key={`days-${timeLeft.days}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            data-text={padNumber(timeLeft.days)}
          >
            {padNumber(timeLeft.days)}
          </motion.span>
          <span className={styles.label}>{t('days')}</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeUnit}>
          <motion.span 
            className={styles.number}
            key={`hours-${timeLeft.hours}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            data-text={padNumber(timeLeft.hours)}
          >
            {padNumber(timeLeft.hours)}
          </motion.span>
          <span className={styles.label}>{t('hours')}</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeUnit}>
          <motion.span 
            className={styles.number}
            key={`minutes-${timeLeft.minutes}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            data-text={padNumber(timeLeft.minutes)}
          >
            {padNumber(timeLeft.minutes)}
          </motion.span>
          <span className={styles.label}>{t('minutes')}</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeUnit}>
          <motion.span 
            className={styles.number}
            key={`seconds-${timeLeft.seconds}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            data-text={padNumber(timeLeft.seconds)}
          >
            {padNumber(timeLeft.seconds)}
          </motion.span>
          <span className={styles.label}>{t('seconds')}</span>
        </div>
      </motion.div>
      <div className={styles.glitchLayers}>
        <div className={styles.glitchLayer}></div>
        <div className={styles.glitchLayer}></div>
        <div className={styles.glitchLayer}></div>
      </div>
    </div>
  );
};

export default CountdownTimer; 