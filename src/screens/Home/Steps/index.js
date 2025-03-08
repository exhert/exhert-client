import React, { useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Sign up and verify your identity",
    description: "Create your account and complete our secure verification process in minutes.",
    icon: "signup"
  },
  {
    number: 2,
    title: "Deposit funds and set preferences",
    description: "Add funds to your wallet and customize your trading preferences.",
    icon: "deposit"
  },
  {
    number: 3,
    title: "Connect with trusted traders",
    description: "Our AI matches you with verified traders in seconds based on your needs.",
    icon: "connect"
  },
  {
    number: 4,
    title: "Complete trades and withdraw instantly",
    description: "Finalize your transactions and access your funds immediately.",
    icon: "complete"
  }
];

const Steps = () => {
  const controls = useAnimation();
  const pathControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      pathControls.start({
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" }
      });
    } else {
      controls.start("hidden");
      pathControls.start({
        pathLength: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
  }, [controls, inView, pathControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
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
        <motion.div 
          className={styles.head}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={cn("h2", styles.title)}>How It Works</h2>
          <div className={styles.subtitle}>Simple steps to start trading</div>
        </motion.div>
        
        <div className={styles.stepsWrapper}>
          <div className={styles.timelinePath}>
            <svg 
              viewBox="0 0 50 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.pathSvg}
            >
              <motion.path 
                d="M25 0V600" 
                stroke="url(#gradient)" 
                strokeWidth="4" 
                strokeDasharray="1000"
                initial={{ pathLength: 0 }}
                animate={pathControls}
                className={styles.animatedPath}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffc000" />
                  <stop offset="100%" stopColor="#1b39bb" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <motion.div 
            className={styles.stepsContainer}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {steps.map((step, index) => (
              <motion.div 
                className={styles.stepItem}
                key={index}
                variants={itemVariants}
              >
                <div className={styles.stepContent}>
                  <motion.div 
                    className={styles.stepNumber}
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(255, 192, 0, 0.4)", "0 0 20px rgba(255, 192, 0, 0.8)", "0 0 0 rgba(255, 192, 0, 0.4)"]
                    }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {step.number}
                  </motion.div>
                  <div className={styles.stepTextContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
                
                <motion.div 
                  className={styles.stepIllustration}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                >
                  {step.icon === "signup" && (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.stepIcon}>
                      <motion.path 
                        d="M60 15C35.15 15 15 35.15 15 60C15 84.85 35.15 105 60 105C84.85 105 105 84.85 105 60C105 35.15 84.85 15 60 15Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M60 40C53.37 40 48 45.37 48 52C48 58.63 53.37 64 60 64C66.63 64 72 58.63 72 52C72 45.37 66.63 40 60 40Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                      />
                      <motion.path 
                        d="M39 88V84C39 77.37 44.37 72 51 72H69C75.63 72 81 77.37 81 84V88" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                      />
                      <motion.path 
                        d="M85 45L95 55" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
                      />
                      <motion.path 
                        d="M95 45L85 55" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1 }}
                      />
                    </svg>
                  )}
                  
                  {step.icon === "deposit" && (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.stepIcon}>
                      <motion.path 
                        d="M30 40H90C95.52 40 100 44.48 100 50V80C100 85.52 95.52 90 90 90H30C24.48 90 20 85.52 20 80V50C20 44.48 24.48 40 30 40Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M20 60H100" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                      />
                      <motion.path 
                        d="M40 75H40.01" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
                      />
                      <motion.path 
                        d="M60 75H70" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
                      />
                      <motion.path 
                        d="M60 30L60 40" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
                      />
                      <motion.path 
                        d="M50 35L60 30L70 35" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
                      />
                    </svg>
                  )}
                  
                  {step.icon === "connect" && (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.stepIcon}>
                      <motion.path 
                        d="M45 75C52.73 75 59 68.73 59 61C59 53.27 52.73 47 45 47C37.27 47 31 53.27 31 61C31 68.73 37.27 75 45 75Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M75 47C82.73 47 89 40.73 89 33C89 25.27 82.73 19 75 19C67.27 19 61 25.27 61 33C61 40.73 67.27 47 75 47Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                      />
                      <motion.path 
                        d="M75 103C82.73 103 89 96.73 89 89C89 81.27 82.73 75 75 75C67.27 75 61 81.27 61 89C61 96.73 67.27 103 75 103Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                      />
                      <motion.path 
                        d="M58.5 57.5L61.5 36.5" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
                      />
                      <motion.path 
                        d="M58.5 64.5L61.5 85.5" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                      />
                    </svg>
                  )}
                  
                  {step.icon === "complete" && (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.stepIcon}>
                      <motion.path 
                        d="M60 100C82.09 100 100 82.09 100 60C100 37.91 82.09 20 60 20C37.91 20 20 37.91 20 60C20 82.09 37.91 100 60 100Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M45 60L55 70L75 50" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                      />
                      <motion.path 
                        d="M60 40V60" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
                      />
                      <motion.path 
                        d="M80 40L40 80" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                      />
                    </svg>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
          <p className={styles.ctaText}>Join thousands of traders already using Exhert</p>
        </motion.div>
      </div>
      
      <div className={styles.backgroundWireframe}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.wireframeSvg}>
          <motion.path 
            d="M-100 400H1540M720 -100V900M200 100L1240 700M1240 100L200 700" 
            stroke="rgba(255, 255, 255, 0.03)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="720" 
            cy="400" 
            r="300" 
            stroke="rgba(255, 255, 255, 0.03)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.rect 
            x="420" 
            y="100" 
            width="600" 
            height="600" 
            stroke="rgba(255, 255, 255, 0.03)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Steps;
