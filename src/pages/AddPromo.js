import React from "react";
import styles from "../styles/AddPromo.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import Camera from "../assets/img/camera.png";

function AddPromo() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.title}>
                <p>
                  Favorite & Promo
                  <span> &gt; Add new promo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <section className={styles["left-content"]}>
                <div className={styles["photo-promo"]}>
                  <img src={Camera} alt="default" />
                </div>
                <div className={styles["take-picture"]}>
                  <Button text="Take a picture" />
                </div>
                <div className={styles["from-gallery"]}>
                  <Button text="Choose from gallery" />
                </div>
                <div className={styles["enter-discount"]}>
                  <p className="title">Enter the discount :</p>
                  <input type="text" name="stock" placeholder="Input stock" />
                </div>
                <div className={styles["expire-date"]}>
                  <p className="title">Expire date :</p>
                  <input
                    type="time"
                    name="start"
                    placeholder="Select start date"
                  />
                  <input type="time" name="end" placeholder="Select end date" />
                </div>
                <div className={styles["coupon-code"]}>
                  <p className="title">Input coupon code :</p>
                  <input type="text" name="code" placeholder="Input code" />
                </div>
              </section>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AddPromo;
