import React from "react";
import styles from "../styles/Product.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/CardProduct";

import promoImage from "../assets/img/image 29.png";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState([]);
  const [url, setUrl] = useState(
    "http://localhost:8060/api/v1/products?limit=12&page=1"
  );

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.result.result.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

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
              <div className={styles["front-bar"]}>
                <div className={styles.top}>
                  <img src={promoImage} alt="menu-promo" />
                  <h2>Beef Spaghetti</h2>
                  <h2>20% OFF</h2>
                  <p>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                </div>
                <div className={styles.bottom}>
                  <h4>COUPON CODE</h4>
                  <h3>FNPR15RG</h3>
                  <p>Valid untill October 10th 2020</p>
                </div>
              </div>
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
            {product.map((e) => (
              <Card
                text={e.product_name}
                price={currency(e.price)}
                image={e.image}
              />
            ))}

            {/* <div className={styles["content-bar"]}>
              <img src={hazelnutImage} alt="Hazelnut Latte" />
              <h2>Hazelnut Latte</h2>
              <h3>IDR 25.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={summerFriedImage} alt="Summer fried rice" />
              <h2>Summer fried rice</h2>
              <h3>IDR 32.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={creamyImage} alt="" />
              <h2>Creamy Ice Latte</h2>
              <h3>IDR 27.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={veggieImage} alt="Veggie tomato mix" />
              <h2>Veggie tomato mix</h2>
              <h3>IDR 34.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={hazelnutImage} alt="" />
              <h2>Hazelnut Latte</h2>
              <h3>IDR 25.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={summerFriedImage} alt="" />
              <h2>Summer fried rice</h2>
              <h3>IDR 32.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={creamyImage} alt="" />
              <h2>Creamy Ice Latte</h2>
              <h3>IDR 27.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={veggieImage} alt="Veggie tomato mix" />
              <h2>Veggie tomato mix</h2>
              <h3>IDR 34.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={hazelnutImage} alt="" />
              <h2>Hazelnut Latte</h2>
              <h3>IDR 25.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={summerFriedImage} alt="" />
              <h2>Summer fried rice</h2>
              <h3>IDR 32.000</h3>
            </div>
            <div className={styles["content-bar"]}>
              <img src={creamyImage} alt="" />
              <h2>Creamy Ice Latte</h2>
              <h3>IDR 27.000</h3>
            </div> */}
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Product;
