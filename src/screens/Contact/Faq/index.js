import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";
import { motion } from "framer-motion";
import { useTranslation } from "../../../utils/useTranslation";

const Faq = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t('general'),
      items: [
        {
          title: t('whatIsExhert'),
          content: t('whatIsExhertAnswer'),
        },
        {
          title: t('howP2pWorks'),
          content: t('howP2pWorksAnswer'),
        },
        {
          title: t('availability'),
          content: t('availabilityAnswer'),
        },
        {
          title: t('supportedCrypto'),
          content: t('supportedCryptoAnswer'),
        },
        {
          title: t('createAccount'),
          content: t('createAccountAnswer'),
        },
      ],
    },
    {
      title: t('security'),
      items: [
        {
          title: t('transactionSecurity'),
          content: t('transactionSecurityAnswer'),
        },
        {
          title: t('unauthorizedActivity'),
          content: t('unauthorizedActivityAnswer'),
        },
        {
          title: t('escrowSystem'),
          content: t('escrowSystemAnswer'),
        },
        {
          title: t('dataPrivacy'),
          content: t('dataPrivacyAnswer'),
        },
      ],
    },
    {
      title: t('trading'),
      items: [
        {
          title: t('paymentMethods'),
          content: t('paymentMethodsAnswer'),
        },
        {
          title: t('exchangeRates'),
          content: t('exchangeRatesAnswer'),
        },
        {
          title: t('fees'),
          content: t('feesAnswer'),
        },
      ],
    },
    {
      title: t('support'),
      items: [
        {
          title: t('contactSupport'),
          content: t('contactSupportAnswer'),
        },
        {
          title: t('verificationTime'),
          content: t('verificationTimeAnswer'),
        },
        {
          title: t('mobileApp'),
          content: t('mobileAppAnswer'),
        },
      ],
    },
  ];

  const options = items.map(x => x.title);
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
            {t('faqTitle')}
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
