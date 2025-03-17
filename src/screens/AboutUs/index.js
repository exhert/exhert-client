import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.sass";
import { motion } from "framer-motion";
import { useTranslation } from "../../utils/useTranslation";

const AboutUs = () => {
  const { t, language } = useTranslation();
  const [isTranslationLoaded, setIsTranslationLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force a re-render after component mount to ensure translations are loaded
    const timer = setTimeout(() => {
      setIsTranslationLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Re-render when language changes
  useEffect(() => {
    setIsTranslationLoaded(prev => !prev);
  }, [language]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Content with fallbacks
  const content = {
    title: t('aboutUsTitle') || "The Future of Secure Crypto Trading",
    subtitle: t('aboutUsSubtitle') || "Fast. Secure. Stress-free.",
    ourMission: t('ourMission') || "Our Mission",
    missionText1: t('missionText1') || "Buying and selling crypto should be fast, secure, and stress-free. Yet, in many regions, especially across Africa, crypto traders are forced into risky P2P transactions, dealing with scams, payment delays, and unreliable platforms.",
    missionText2: t('missionText2') || "Exhert is here to change that.",
    missionText3: t('missionText3') || "We've built a seamless, escrow-backed trading platform where users can buy and sell crypto instantly without worrying about counterparty risks. No unnecessary confirmations. No delays. Just secure transactions, handled effortlessly.",
    howExhertWorks: t('howExhertWorks') || "How Exhert Works",
    exhertSimple: t('exhertSimple') || "Exhert makes crypto trading simple:",
    secureEscrow: t('secureEscrow') || "Secure escrow protection",
    escrowDescription: t('escrowDescription') || "Both fiat and crypto are held safely until the trade is complete.",
    instantTransactions: t('instantTransactions') || "Instant transactions",
    transactionsDescription: t('transactionsDescription') || "No need to wait for payment confirmations.",
    mobileIntegration: t('mobileIntegration') || "Full mobile money & bank integration",
    integrationDescription: t('integrationDescription') || "Trade using MTN MoMo, Orange Money, M-Pesa, and more.",
    everyTrade: t('everyTrade') || "Every trade is designed to be fast, effortless, and protected.",
    whyWeBuilt: t('whyWeBuilt') || "Why We Built Exhert",
    whyText1: t('whyText1') || "Most centralized exchanges don't support local payment methods. Banks block transactions. P2P traders are left to negotiate with strangers, hoping they don't get scammed.",
    whyText2: t('whyText2') || "We built Exhert to eliminate these risks and provide a trustworthy alternative—a platform where users can trade with peace of mind.",
    ourVision: t('ourVision') || "Our Vision",
    visionText: t('visionText') || "We're starting in Africa, but the goal is global: a world where anyone can trade crypto securely and seamlessly, regardless of location.",
    joinMovement: t('joinMovement') || "Join the Movement",
    joinText: t('joinText') || "Exhert is now in early access, and during our beta phase, trading is completely free. This is your chance to be among the first to experience the future of P2P crypto trading.",
    joinWaitlist: t('joinWaitlist') || "Join the Waitlist",
    tradeTagline: t('tradeTagline') || "Trade safer. Trade faster. Trade smarter."
  };

  return (
    <div className={styles.aboutUs}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h1>
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {content.subtitle}
          </motion.h2>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.ourMission}
          </motion.h2>
          <motion.div 
            className={styles.content}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{content.missionText1}</p>
            <p><strong>{content.missionText2}</strong></p>
            <p>{content.missionText3}</p>
          </motion.div>
        </section>

        <section className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.howExhertWorks}
          </motion.h2>
          <motion.div 
            className={styles.content}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{content.exhertSimple}</p>
          </motion.div>
          <motion.div 
            className={styles.features}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className={styles.feature} variants={fadeIn}>
              <div className={styles.featureIcon}>
                <img src="/images/icons/shield.svg" alt="Security" />
              </div>
              <h3>{content.secureEscrow}</h3>
              <p>{content.escrowDescription}</p>
            </motion.div>
            
            <motion.div className={styles.feature} variants={fadeIn}>
              <div className={styles.featureIcon}>
                <img src="/images/icons/flash.svg" alt="Speed" />
              </div>
              <h3>{content.instantTransactions}</h3>
              <p>{content.transactionsDescription}</p>
            </motion.div>
            
            <motion.div className={styles.feature} variants={fadeIn}>
              <div className={styles.featureIcon}>
                <img src="/images/icons/mobile.svg" alt="Mobile" />
              </div>
              <h3>{content.mobileIntegration}</h3>
              <p>{content.integrationDescription}</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.content}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{content.everyTrade}</p>
          </motion.div>
        </section>

        <section className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.whyWeBuilt}
          </motion.h2>
          <motion.div 
            className={styles.content}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{content.whyText1}</p>
            <p>{content.whyText2}</p>
          </motion.div>
        </section>

        <section className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.ourVision}
          </motion.h2>
          <motion.div 
            className={styles.content}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{content.visionText}</p>
          </motion.div>
        </section>

        <section className={styles.joinSection}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.joinMovement}
          </motion.h2>
          <motion.div 
            className={styles.contentEnd0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{content.joinText}</p>
          </motion.div>
          <motion.div 
            className={styles.ctaContainer}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://exhert.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, backgroundColor: "#e6ad00" }}
              whileTap={{ scale: 0.95 }}
            >
              {content.joinWaitlist}
            </motion.a>
          </motion.div>
          <motion.p 
            className={styles.tagline}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.tradeTagline}
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;