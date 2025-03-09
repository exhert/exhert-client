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