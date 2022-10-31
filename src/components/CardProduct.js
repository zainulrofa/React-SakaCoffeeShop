import React from "react";
import styles from "../styles/CardProduct.module.css";
import withNavigate from "../helpers/withNavigate";

// import veggieImage from "../assets/img/image1.png";

function CardProduct(props) {
  return (
    <div
      className={styles["content-bar"]}
      onClick={() => {
        props.navigate("/product-detail");
      }}
    >
      <img
        src={`http://localhost:8060/${props.image}`}
        alt="Veggie tomato mix"
      />
      <h2>{props.text}</h2>
      <h3>{props.price}</h3>
    </div>
  );
}

export default withNavigate(CardProduct);
