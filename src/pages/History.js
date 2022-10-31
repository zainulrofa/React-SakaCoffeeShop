import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/History.module.css";
import Card from "../components/CardHistory";

function History() {
  // const [history, setHistory] = useState([]);
  // const [url, setUrl] = useState(
  //   "http://localhost:8060/api/v1/products?page=1"
  // );

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setHistory(res.data.result.result.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [url]);

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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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
