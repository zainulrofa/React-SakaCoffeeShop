import React from "react";
import styles from "../styles/Product.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/CardProduct";
import CardPromo from "../components/CardPromo";

// import promoImage from "../assets/img/image 29.png";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { getData } from "../helpers/fetch";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

function Product() {
  const getQuery = useQuery();
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    categories: getQuery.get("categories") ? getQuery.get("categories") : "",
    sort: getQuery.get("sort") ? getQuery.get("sort") : "",
  });

  const fetchData = async (query) => {
    try {
      const products = await getData(`/products`, query);
      setProduct(products.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(query);
    console.log(query);
    console.log(product);
  }, [query]);

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
              <CardPromo
                title="Chocolate Croissant"
                discount="10%"
                code="SAKA10"
              />
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
              <li
                onClick={() => {
                  setQuery({
                    ...query,
                    sort: "popular",
                    categories: "",
                    search: "",
                  });
                }}
              >
                Favorite Product
              </li>
              <li
                onClick={() => {
                  setQuery({
                    ...query,
                    sort: "",
                    categories: "Coffee",
                    search: "",
                  });
                }}
              >
                Coffee
              </li>
              <li
                onClick={() => {
                  setQuery({
                    ...query,
                    sort: "",
                    categories: "Non Coffee",
                    search: "",
                  });
                }}
              >
                Non Coffee
              </li>
              <li
                onClick={() => {
                  setQuery({
                    ...query,
                    sort: "",
                    categories: "Foods",
                    search: "",
                  });
                }}
              >
                Foods
              </li>
              <li>Add-on</li>
            </ul>
          </div>
          <div className={styles["content-detail"]}>
            {product.map((e) => (
              <Card
                text={e.product_name}
                price={currency(e.price)}
                image={e.image}
                id={e.id}
                key={e.id}
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
