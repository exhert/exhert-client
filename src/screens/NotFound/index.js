import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.sass";
import { motion } from "framer-motion";
import { useTranslation } from "../../utils/useTranslation";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t('pageNotFound')}
        </motion.p>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('pageNotFoundDesc')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/" className={styles.button}>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19 12H5M12 19L5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span>{t('backHome')}</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;