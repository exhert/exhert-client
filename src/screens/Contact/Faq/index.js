import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";
import { motion } from "framer-motion";

const items = [
  {
    title: "General",
    items: [
      {
        title: "What is Exhert?",
        content:
          "Exhert is a secure peer-to-peer cryptocurrency trading platform that enables users to buy and sell digital assets directly with other users. Our platform provides a safe, transparent, and efficient way to trade cryptocurrencies without the need for intermediaries.",
      },
      {
        title: "How does P2P trading work on Exhert?",
        content:
          "P2P (peer-to-peer) trading on Exhert allows users to trade directly with each other. Sellers list their cryptocurrencies with their preferred payment methods and prices, while buyers can browse these listings and choose the best offer. Exhert acts as an escrow service to ensure safe transactions.",
      },
      {
        title: "Is Exhert available in my country?",
        content:
          "Exhert aims to be available globally, as of now we are available in the Cameroon.",
      },
      {
        title: "What cryptocurrencies can I trade on Exhert?",
        content:
          "Exhert supports trading of major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and other popular digital assets. We will regularly add support for new cryptocurrencies based on market demand and security considerations.",
      },
      {
        title: "How do I create an account on Exhert?",
        content:
          "To create an account on Exhert, visit our website and click on the 'Sign Up' button. Follow the registration process by providing your email address, creating a strong password, and completing the verification process to secure your account.",
      },
    ],
  },
  {
    title: "Security",
    items: [
      {
        title: "How does Exhert ensure transaction security?",
        content:
          "Exhert employs advanced security measures including escrow services, two-factor authentication (2FA), encryption, and regular security audits to ensure the safety of all transactions. Our platform also uses smart contracts to automate and secure the trading process.",
      },
      {
        title: "What should I do if I suspect unauthorized activity?",
        content:
          "If you suspect unauthorized activity on your account, immediately change your password, enable two-factor authentication if not already active, and contact our support team. We recommend reporting any suspicious activity as soon as possible.",
      },
      {
        title: "How does the escrow system work?",
        content:
          "Our escrow system temporarily holds the funds of both parties until the transaction is completed. This ensures that both parties fulfill their obligations before the transaction is completed, providing security and peace of mind for all users.",
      },
      {
        title: "Is my personal information safe with Exhert?",
        content:
          "Yes, we take data privacy seriously. Exhert implements strict data protection measures and complies with relevant privacy regulations. We only collect necessary information and use industry-standard encryption to protect your personal data.",
      },
    ],
  },
  {
    title: "Trading",
    items: [
      {
        title: "What payment methods are supported?",
        content:
          "Exhert supports various payment methods like MTN mobile money, Orange money, and other local payment options. we plan to add more payment methods in the future.",
      },
      {
        title: "How are exchange rates determined?",
        content:
          "Exchange rates on Exhert are set by individual sellers based on market conditions. Our platform provides real-time market data to help users make informed decisions, but the final price is determined by the agreement between buyer and seller.",
      },
      {
        title: "What fees does Exhert charge?",
        content:
          "Exhert charges a small transaction fee for completed trades. The fee structure is transparent and competitive compared to traditional exchanges. Detailed fee information is available in the Fees section of our platform.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "How can I contact Exhert support?",
        content:
          "You can contact our support team through the Contact page on our website, by email at support@exhert.com, or through our in-app chat support. Our team is available to assist you with any questions or issues.",
      },
      {
        title: "How long does verification take?",
        content:
          "Account verification typically takes under 24 hours, depending on the volume of requests. Basic verification is usually faster, while advanced verification requiring additional documentation may take longer to process.",
      },
      {
        title: "Is there a mobile app for Exhert?",
        content:
          "Not at the moment, but we are working on it.",
      },
    ],
  },
];

const Faq = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <motion.div 
          className={styles.top}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className={cn("h2", styles.title)}
            variants={itemVariants}
          >
            Frequently asked questions
          </motion.h2>
          <motion.div className={styles.nav} variants={itemVariants}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Dropdown
              className={styles.dropdown}
              value={category}
              setValue={setCategory}
              options={options}
            />
          </motion.div>
        </motion.div>
        <motion.div 
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <motion.div 
                variants={itemVariants} 
                key={index}
                custom={index}
              >
                <Item
                  className={styles.item}
                  item={x}
                  index={index}
                />
              </motion.div>
            ))}
        </motion.div>
      </div>
      <div className={styles.backgroundElements}>
        <div className={styles.element1}></div>
        <div className={styles.element2}></div>
      </div>
    </div>
  );
};

export default Faq;
