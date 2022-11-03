import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/History.module.css";
import Card from "../components/CardHistory";
import { useState, useEffect } from "react";
import { getHistory } from "../helpers/fetch";
import withNavigate from "../helpers/withNavigate";

function History({ navigate }) {
  const [allHistory, setAllHistory] = useState([]);

  const getAllaHistory = async () => {
    const result = await getHistory();
    setAllHistory(result.data.data);
    try {
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    getAllaHistory();
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
                {allHistory.map((item, index) => {
                  // const data = {...item,ceklistItem:dataCeklist, setCeklist:setDataCeklist()}
                  return (
                    <Card
                      key={index}
                      data={item}
                      productName={item.product_name}
                      price={item.price}
                      status={item.status_name}
                      image={item.image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default withNavigate(History);
