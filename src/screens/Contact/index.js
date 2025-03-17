import React from "react";
import Question from "./Question";
import Faq from "./Faq";
import styles from "./Contact.module.sass";
import SEOHelmet from "../../components/SEOHelmet";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Exhert",
    "description": "Get in touch with the Exhert team for questions about our secure crypto trading platform.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Exhert",
      "email": "info@exhert.com",
      "url": "https://exhert.com"
    }
  };

  return (
    <>
      <SEOHelmet 
        title="Contact Us | Exhert"
        description="Have questions about Exhert's secure crypto trading platform? Contact our team for support, partnership inquiries, or general information."
        keywords="contact Exhert, crypto trading support, Exhert help, crypto exchange contact, Cameroon crypto, Cameroon mobile money crypto"
        keywordsFr="contacter Exhert, support trading crypto, aide Exhert, contact échange crypto, crypto-monnaie Camérounaise, paiement mobile Camérounais"
        canonicalUrl="https://exhert.com/contact"
        structuredData={structuredData}
      />
      <div className={styles.contactWrapper}>
        <div className={styles.connectedSections}>
          <Question />
          <Faq />
        </div>
      </div>
    </>
  );
};

export default Contact;
