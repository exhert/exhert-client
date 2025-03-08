import React from "react";
import styles from "./LoadingFallback.module.sass";

const LoadingFallback = () => (
  <div className={styles.loading}>
    <div className={styles.spinner}></div>
    <p className={styles.text}>Loading...</p>
  </div>
);

export default LoadingFallback; 