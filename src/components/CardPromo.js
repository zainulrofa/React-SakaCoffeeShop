import React from "react";
import styles from "../styles/PromoCard.module.css";

function CardPromo(props) {
  return (
    <div className={styles["front-bar"]}>
      <div className={styles.top}>
        <img src={`http://localhost:8060/${props.image}`} alt="menu-promo" />
        <h2>{props.title}</h2>
        <h2>{props.discount}% OFF</h2>
        <p>
          {props.description} {props.title}
        </p>
      </div>
      <div className={styles.bottom}>
        <h4>COUPON CODE</h4>
        <h3>{props.code}</h3>
        <p>Valid untill October 10th 2020</p>
      </div>
    </div>
  );
}

export default CardPromo;
