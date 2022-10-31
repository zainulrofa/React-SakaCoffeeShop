import React from "react";
import styles from "../styles/ForgetPwd.module.css";
import Footer from "../components/Footer";
import Button from "../components/Button";

function ForgotPwd() {
  return (
    <>
      <main className={styles.content}>
        <div className={`${styles["top-content"]} container`}>
          <div className="row text-center">
            <div className="col-12">
              <div className={styles.title}>
                <h1>Forgot your password?</h1>
                <p>Don't worry, we got your back!</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["mid-content"]} container`}>
          <div className="row">
            <div className="col-8">
              <div className={styles["email-bar"]}>
                <input
                  type="text"
                  placeholder="Enter your email adress to get link"
                ></input>
              </div>
            </div>
            <div className="col-4">
              <Button text="Send" variant="color-1" font="style-1" />
            </div>
          </div>
        </div>
        <div className={`${styles["bot-content"]} container`}>
          <div className="row text-center">
            <div className="col-12">
              <div className={styles.title}>
                <p>Click here if you didn't receive any link in 2 minutes</p>
                <div className={styles.btn}>
                  <Button text="Resend link" variant="color-3" />
                </div>
                <p className={styles.name}>01:54</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ForgotPwd;
