import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import styles from "../styles/Payment.module.css";

import Hazelnut from "../assets/img/image 36.png";
import ChickenWing from "../assets/img/image 37.png";
import card from "../assets/img/card.png";
import bank from "../assets/img/bank.png";
import delivery from "../assets/img/delivery.png";

function Payment() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles["title-bar"]}>
                <h1>Checkout your item now!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={styles["left-content"]}>
                <div className={styles.title}>
                  <h1>Order Summary</h1>
                </div>
                <div className={styles.order}>
                  <div className={styles["order-detail"]}>
                    <div className={styles["product-detail"]}>
                      <img src={Hazelnut} alt="Hazelnut"></img>
                      <ol>
                        <li>Hazelnut Latte</li>
                        <li>x 1</li>
                        <li>Regular</li>
                      </ol>
                    </div>
                    <p>IDR 24.0</p>
                  </div>
                  <div className={styles["order-detail"]}>
                    <div className={styles["product-detail"]}>
                      <img src={ChickenWing} alt="Chicken Wing"></img>
                      <ol>
                        <li>Chicken Fire Wings</li>
                        <li>x 2</li>
                      </ol>
                    </div>
                    <p>IDR 30.0</p>
                  </div>
                </div>
                <div className={styles.payment}>
                  <div className={styles["payment-detail"]}>
                    <p>SUBTOTAL</p>
                    <p>TAX & FEES</p>
                    <p>SHIPPING</p>
                  </div>
                  <div className={styles["payment-price"]}>
                    <p>IDR 120.000</p>
                    <p>IDR 20.000</p>
                    <p>IDR 10.000</p>
                  </div>
                </div>
                <div className={styles.total}>
                  <h5>TOTAL</h5>
                  <h5>IDR 150.000</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className={styles["right-content"]}>
                <div className={styles.title}>
                  <h1>Address details</h1>
                  <p>edit</p>
                </div>
                <div className={styles["address-detail"]}>
                  <p>
                    <span>Delivery</span> to Iskandar Street
                  </p>
                  <div className={styles.border}>
                    <p>
                      Km 5 refinery road oppsite re public road, effurun,
                      Jakarta
                    </p>
                  </div>

                  <p>+62 81348287878</p>
                </div>
                <div className={styles.title}>
                  <h1>Payment method</h1>
                </div>
                <div className={styles["payment-bar"]}>
                  <div className={styles.method}>
                    <input type="radio" name="choice"></input>
                    <div className={styles.icon1}>
                      <img src={card} alt="card"></img>
                    </div>
                    <p>Card</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.method}>
                    <input type="radio" name="choice"></input>
                    <div className={styles.icon2}>
                      <img src={bank} alt="bank"></img>
                    </div>
                    <p>Bank account</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.method}>
                    <input type="radio" name="choice"></input>
                    <div className={styles.icon3}>
                      <img src={delivery} alt="delivery"></img>
                    </div>
                    <p>Cash on delivery</p>
                  </div>
                </div>
                <Button text="Confirm and Pay" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
