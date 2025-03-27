import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ReferalPage.module.sass";
import SEOHelmet from "../../components/SEOHelmet";

const ReferralPage = () => {
  const [referralCode, setReferralCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Generate a unique referral code with more entropy
  const generateReferralCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const timestamp = Date.now().toString(36);
    const randomPart = Array.from(crypto.getRandomValues(new Uint32Array(4)))
      .map(x => x.toString(36).slice(0, 2))
      .join('');
    
    const code = `${timestamp.slice(0,4)}-${randomPart.slice(0,4)}-${randomPart.slice(4,8)}`.toUpperCase();
    setReferralCode(code);
    setAnimationKey(prev => prev + 1);
  };

  // Get current base URL dynamically
  const getCurrentBaseUrl = () => {
    return window.location.origin;
  };

  // Copy referral link to clipboard with enhanced feedback
  const copyReferralLink = () => {
    const baseUrl = getCurrentBaseUrl();
    const referralLink = `${baseUrl}/early-access=${referralCode}`;
    
    navigator.clipboard.writeText(referralLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={styles.referralPage}>
      <SEOHelmet 
        title="Early Access | Be the First"
        description="Get exclusive early access to our platform"
        keywords="early access, invite, exclusive, beta"
      />

      <div className={styles.hero}>
        <div className={styles.container}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Early Access Program
          </motion.h1>
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Be Among the First to Experience Tomorrow
          </motion.h2>
        </div>
      </div>

      <div className={styles.container}>
        <motion.section 
          className={styles.referralSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className={styles.referralContent}
            variants={itemVariants}
          >
            <motion.button 
              className={styles.generateButton}
              onClick={generateReferralCode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Generate Invite Code
            </motion.button>

            <AnimatePresence>
              {referralCode && (
                <motion.div 
                  key={animationKey}
                  className={styles.referralCodeContainer}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.referralCodeDisplay}>
                    <span>{referralCode}</span>
                  </div>
                  <motion.button 
                    className={styles.copyButton}
                    onClick={copyReferralLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isCopied ? 'Copied!' : 'Copy Invite Link'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              className={styles.referralInstructions}
              variants={itemVariants}
            >
              <p>🔑 Generate a unique invite code</p>
              <p>🚀 Share with friends to grant early access</p>
            </motion.div>

            <motion.div 
              className={styles.referralBenefits}
              variants={itemVariants}
            >
              <h3>Exclusive Early Access Benefits</h3>
              <ul>
                <li>First to explore cutting-edge features</li>
                <li>Provide direct feedback to our team</li>
                <li>Unlock special founder status</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ReferralPage;