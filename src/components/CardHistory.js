import React from "react";
import styles from "../styles/CardHistory.module.css";

import veggieImage from "../assets/img/image1.png";
import bean from "../assets/img/bean.png";

function CardHistory() {
  return (
    <div className={styles.card}>
      <div className="side-bar">
        <div className={styles.delete}>
          <img src={bean} alt="bean"></img>
        </div>
        <div className={styles.close}>
          <span>x</span>
        </div>
      </div>
      <div className={styles["card-bar"]}>
        <div className={styles["card-image"]}>
          <img src={veggieImage} alt="product"></img>
        </div>
        <div className={styles["card-content"]}>
          <h2 className={styles["card-title"]}>Veggie tomato mix</h2>
          <p className={styles["card-price"]}>IDR 34.000</p>
          <p className={styles["deliv-method"]}>Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default CardHistory;
