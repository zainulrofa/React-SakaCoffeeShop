import React, { Component } from "react";
import styles from "../styles/Product.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/CardProduct";
import CardPromo from "../components/CardPromo";
import axios from "axios";
import withNavigate from "../helpers/withNavigate";

class Produk extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      promo: [],
    };
  }
  allProducts = () => {
    axios
      .get(`http://localhost:8060/api/v1/products?limit=16&page=1`)
      .then((res) => {
        console.log(res.data);
        const product = res.data.result;
        this.setState({ product });
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Header />
        <section className={styles["main-container"]}>
          <aside className={styles["left-content"]}>
            <div className={styles.promo}>
              <h1>Promo for you</h1>
              <p>Coupons will be updated every weeks. Check them out! </p>
              <div className={styles["promo-detail"]}>
                <div className={styles["back-bar"]}></div>
                <div className={styles["med-bar"]}></div>
                <CardPromo />
                {/* <button type="submit">Apply Coupon</button> */}
                <Button text="Apply Coupon" />
              </div>
            </div>
            <ol>
              <h3>Terms and Condition</h3>
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. It only for dine in</li>
              <li>3. Buy 1 get 1 only for new user</li>
              <li>4. Should make member card to apply coupon</li>
            </ol>
          </aside>
          <main className={styles["right-content"]}>
            <div className={styles["head-content"]}>
              <ul>
                <li>Favorite Product</li>
                <li>Coffee</li>
                <li>Non Coffee</li>
                <li>Foods</li>
                <li>Add-on</li>
              </ul>
            </div>
            <div className={styles["content-detail"]}>
              <Card />
            </div>
          </main>
        </section>
        <Footer />
      </>
    );
  }
}

export default withNavigate(Produk);
