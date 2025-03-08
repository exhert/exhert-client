import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import { motion, AnimatePresence } from "framer-motion";

const Item = ({ className, item, index }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn(className, styles.item)}>
      <motion.div
        className={cn(styles.head, { [styles.active]: visible })}
        onClick={() => setVisible(!visible)}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className={styles.number}>
          {index < 9 && "0"}
          {index + 1}
        </div>
        <div className={styles.title}>{item.title}</div>
        <motion.div 
          className={styles.arrow}
          animate={{ rotate: visible ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name="arrow-down" size="24" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {visible && (
          <motion.div 
            className={styles.body}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Item;
