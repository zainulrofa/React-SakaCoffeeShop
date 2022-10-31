import React from "react";
import styles from "../styles/Footer.module.css";
import withNavigate from "../helpers/withNavigate";

import sakaLogo from "../assets/img/sakacoffee.png";
import Facebook from "../assets/img/Facebook.png";
import Twitter from "../assets/img/Twitter.png";
import Instagram from "../assets/img/Vector.png";

function Footer({ navigate }) {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["left-foot-content"]}>
        <div
          className={styles["logo-detail"]}
          onClick={() => {
            navigate("/");
          }}
        >
          <img className={styles.logo} src={sakaLogo} alt="cof" />
          <h2>Saka Coffee Shop</h2>
        </div>
        <div className={styles["about-detail"]}>
          <p>
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans.
          </p>
        </div>
        <div className={styles["sosmed-detail"]}>
          <div className={styles.box}>
            <div className={styles["back-logo"]}></div>
            <img className={styles["img-logo"]} src={Facebook} alt="" />
          </div>
          <div className={styles.box}>
            <div className={styles["back-logo"]}></div>
            <img className={styles["img-logo"]} src={Twitter} alt="" />
          </div>
          <div className={styles.box}>
            <div className={styles["back-logo"]}></div>
            <img className={styles["img-logo"]} src={Instagram} alt="" />
          </div>
        </div>
        <p className={styles.copyright}>©2020SakaCoffeeStore</p>
      </div>
      <div className={styles["right-foot-content"]}>
        <div className={styles["content-detail"]}>
          <h2>Product</h2>
          <ol>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Contries</li>
            <li>Blog</li>
          </ol>
        </div>
        <div className={styles["content-detail"]}>
          <h2>Engage</h2>
          <ol>
            <li>Coffee Shop ?</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ol>
        </div>
      </div>
    </footer>
  );
}

export default withNavigate(Footer);
