import React, { useRef } from "react";
import Main from "./Main";
import WhyJoin from "./WhyJoin";
import Feature from "./Features";
import Security from "./Security";
import FinalCTA from "./FinalCTA";
import styles from "./Home.module.sass";
import SEOHelmet from "../../components/SEOHelmet";

const Home = () => {
   const scrollToRef = useRef(null);

   const structuredData = {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "Exhert",
     "url": "https://exhert.com",
     "description": "A secure, escrow-backed crypto trading platform for fast, stress-free transactions.",
     "potentialAction": {
       "@type": "SearchAction",
       "target": "https://exhert.com/search?q={search_term_string}",
       "query-input": "required name=search_term_string"
     }
   };

  return (
    <>
      <SEOHelmet 
        title="Exhert | Secure Crypto Trading Platform"
        description="Exhert provides a secure, escrow-backed crypto trading platform for fast, stress-free transactions across Cameroon, Africa and beyond."
        keywords="crypto trading, secure crypto, escrow crypto, P2P trading, Africa crypto, mobile money crypto, Cameroon crypto, Cameroon mobile money crypto"
        keywordsFr="trading crypto, plateforme d'échange sécurisée, crypto-monnaie Afrique, paiement mobile, échange P2P, séquestre crypto, crypto-monnaie Camérounaise, paiement mobile Camérounais"
        canonicalUrl="https://exhert.com"
        structuredData={structuredData}
      />
      <div className={styles.homeWrapper}>
        <div className={styles.noSpaceContainer}>
          <Main />
          <div className={styles.connectedSections}>
            <WhyJoin />
            <Feature />
            <Security />
            <FinalCTA />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
