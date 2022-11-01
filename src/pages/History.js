import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/History.module.css";
import Card from "../components/CardHistory";
import { useState } from "react";
import { getHistory } from "../helpers/fetch";
import { useEffect } from "react";

function History() {
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const [history, setHistory] = useState([]);
  const requestHistory = async (token) => {
    try {
      const res = await getHistory(token);
      console.log(res.data.data);
      setHistory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestHistory(token);
    console.log(history);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className={styles.title}>
                <h1>Let's see what you have bought!</h1>
                <p>Long press to delete item</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={styles.card}>
                {/* {history.map((e) => (
                  <Card
                    productName={e.product_name}
                    price={e.price}
                    status={e.status_name}
                    image={e.image}
                  />
                ))} */}
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
                <Card
                  productname="Chocolate Croissant"
                  price="IDR 25.000"
                  status="DONE"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default History;
