import React, { useRef } from "react";
import Main from "./Main";
import WhyJoin from "./WhyJoin";
import Feature from "./Features";
import Security from "./Security";
import FinalCTA from "./FinalCTA";
import styles from "./Home.module.sass";

const Home = () => {
   const scrollToRef = useRef(null);

  return (
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
  );
};

export default Home;
