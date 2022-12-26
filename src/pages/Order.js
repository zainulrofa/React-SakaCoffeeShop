import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Order.module.css";

function Order() {
  return (
    <>
      <Header />
      <main className={styles["content"]}></main>
      <Footer />
    </>
  );
}

export default Order;
