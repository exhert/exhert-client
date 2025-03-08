import React from "react";
import Main from "./Main";
import Education from "./Education";
import Faq from "./Faq";
import Question from "./Question";
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
