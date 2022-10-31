import React from "react";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import withNavigate from "../helpers/withNavigate";

import sakaLogo from "../assets/img/sakacoffee.png";
import searching from "../assets/img/Searching.png";
import chat from "../assets/img/chat.png";
import smallProfile from "../assets/img/image 39.png";

function Header({ navigate }) {
  const [state, setState] = useState("");
  const text = state.text;

  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}` ? "" : `${styles["slide-bar"]}`,
    }));
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div
            className={styles["logo-img"]}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={sakaLogo} alt="logo" />
          </div>
          <p
            className={styles["logo-title"]}
            onClick={() => {
              navigate("/");
            }}
          >
            Saka Coffee Shop
          </p>
        </div>
        <ol className={text}>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/product");
            }}
          >
            Product
          </li>
          <li>Yor Cart</li>
          <li
            onClick={() => {
              navigate("/history");
            }}
          >
            History
          </li>
        </ol>
      </div>
      <div className={styles["right-bar"]}>
        <img className={styles.searching} src={searching} alt="searching" />
        <div className={styles.chat}>
          <div className={styles.notif}>1</div>
          <img src={chat} alt="" />
        </div>
        <div
          className={styles.profile}
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img src={smallProfile} alt="profile" />
        </div>
      </div>
      <div className={styles["menu-toggle"]} onClick={slide}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default withNavigate(Header);
