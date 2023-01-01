import React from "react";
import styles from "../styles/CardProduct.module.css";
import withNavigate from "../helpers/withNavigate";

import pencil from "../assets/img/pencil.png";
import { useSelector } from "react-redux";

// import veggieImage from "../assets/img/image1.png";

function CardProduct(props) {
  const role = useSelector((state) => state.auth.userData.role);
  // const userinfo = JSON.parse(localStorage.getItem("userInfo"));
  // let admin = null;

  // if (userinfo && userinfo.payload.role === "Admin")
  //   admin = userinfo.payload.role;
  // console.log(admin);
  // console.log(userinfo.payload);

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
      <div className={styles["content-bar"]}>
        <img
          className={styles["product-image"]}
          src={`${props.image}`}
          alt=""
          onClick={() => {
            props.navigate(`/product-detail/${props.id}`);
          }}
        />
        <h2>{props.text}</h2>
        <h3>{currency(props.price)}</h3>
        {role === "Admin" && (
          <div className={`${styles["edit-pencil"]}`}>
            <img
              src={pencil}
              alt="edit"
              onClick={() => {
                props.navigate(`/product/edit-product/${props.id}`);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default withNavigate(CardProduct);
