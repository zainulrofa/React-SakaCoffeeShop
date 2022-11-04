import React from "react";
import styles from "../styles/CardProduct.module.css";
import withNavigate from "../helpers/withNavigate";

import pencil from "../assets/img/pencil.png";

// import veggieImage from "../assets/img/image1.png";

function CardProduct(props) {
  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  return (
    <>
      <div
        className={styles["content-bar"]}
        onClick={() => {
          props.navigate(`/product-detail/${props.id}`);
        }}
      >
        <img
          className={styles["product-image"]}
          src={`http://localhost:8060/${props.image}`}
          alt=""
        />
        <h2>{props.text}</h2>
        <h3>{currency(props.price)}</h3>
        <div className={styles["edit-pencil"]}>
          <img src={pencil} alt="edit" />
        </div>
      </div>
    </>
  );
}

export default withNavigate(CardProduct);
