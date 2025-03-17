import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.sass";
import { motion } from "framer-motion";
import { useTranslation } from "../../utils/useTranslation";
import SEOHelmet from "../../components/SEOHelmet";

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
    visionText: t('visionText') || "We're starting in Cameroon, but the goal is to be available across Africa: a world where anyone can trade crypto securely and seamlessly, regardless of location.",
    joinMovement: t('joinMovement') || "Join the Movement",
    joinText: t('joinText') || "Exhert is now in early access, and during our beta phase, trading is completely free. This is your chance to be among the first to experience the future of P2P crypto trading.",
    joinWaitlist: t('joinWaitlist') || "Join the Waitlist",
    tradeTagline: t('tradeTagline') || "Trade safer. Trade faster. Trade smarter."
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Exhert",
    "url": "https://exhert.com",
    "logo": "https://exhert.com/images/logo-ex.png",
    "description": "A secure, escrow-backed crypto trading platform for fast, stress-free transactions.",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61561077623847",
      "https://x.com/EXHERTexchange?t=s5Jd3JQUc8RNTCT8DVlO9g&s=08",
      "https://www.instagram.com/exhertexchange?igsh=MTFrbDNtaXI4NDhpeQ==",
      "https://www.tiktok.com/@exhert7?_t=8n7G9UteVaX&_r=1"
    ]
  };

  return (
    <div className={styles.aboutUs}>
      <SEOHelmet 
        title={`${content.aboutUs} | Exhert - ${content.title}`}
        description="Exhert is revolutionizing crypto trading with a secure, escrow-backed platform that eliminates risks and delays. Learn about our mission to make crypto trading accessible across Africa and beyond."
        keywords="secure crypto trading, escrow crypto, P2P trading platform, mobile money crypto, Africa crypto exchange, Exhert"
        keywordsFr="trading crypto sécurisé, plateforme d'échange P2P, crypto-monnaie Afrique, paiement mobile, séquestre crypto, Exhert"
        canonicalUrl="https://exhert.com/about-us"
        structuredData={structuredData}
      />
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