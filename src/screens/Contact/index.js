import React from "react";
import Question from "./Question";
import Faq from "./Faq";
import styles from "./Contact.module.sass";

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.connectedSections}>
        <Question />
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
