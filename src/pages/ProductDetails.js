import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Loading from "../components/Loading";
import styles from "../styles/ProductDetails.module.css";
import withNavigate from "../helpers/withNavigate";

import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/fetch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../redux/actions/product";
import transactionAction from "../redux/actions/transaction";
import { toast } from "react-toastify";

function ProductDetails({ navigate }) {
  // const [state, setState] = useState({ count: 0, size: "size" });
  // const count = state.count;
  // const size = state.size;

  // function reguler() {
  //   setState(() => {
  //     return { size: "reguler" };
  //   });
  // }

  // function decreamentCount() {
  //   setState((prevState) => {
  //     return { count: prevState.count - 1 };
  //   });
  // }

  // function increamentCount() {
  //   setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // }

  const { id } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);
  const isLoading = useSelector((state) => state.product.isLoading);
  const product = useSelector((state) => state.product.detail);
  // const [product, setProduct] = useState({});
  // console.log(product);
  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };
  // const getDetail = async () => {
  //   try {
  //     const result = await getProductById(id);
  //     // console.log(result.data.result.data);
  //     setProduct(result.data.result.data);
  //   } catch (error) {
  //     console.log(error);
  //     if (error.response.data.statusCode === 403) {
  //       navigate("/login");
  //     }
  //   }
  // };

  useEffect(() => {
    dispatch(productAction.getDetailThunk(id, token));
  }, [dispatch, id, token]);

  const [body, setBody] = useState({
    product_item: [],
    product_item_view: [],
    delivery_methods_id: null,
    set_time: null,
  });
  const [count, setCount] = useState(1);
  const [method, setMethod] = useState(1);
  const [size, setSize] = useState(1);

  console.log(body);

  function reguler() {
    setSize(() => 1);
  }

  function large() {
    setSize(() => 2);
  }

  function xtra() {
    setSize(() => 3);
  }

  const sizeName = () => {
    let sizeValue = "Reguler";
    if ((size = "2")) sizeValue = "Large";
    if ((size = "3")) sizeValue = "XL";
    return sizeValue;
  };

  function decreamentCount() {
    setCount((prevCount) => {
      if (prevCount === 0) return 0;
      return prevCount - 1;
    });
  }

  function increamentCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const handleCart = () => {
    const product_item = {
      products_id: product.id,
      size_products_id: size,
      quantity: count,
      price: product.price * count,
    };
    const product_item_view = {
      image: product.image,
      product_name: product.product_name,
      quantity: count,
      size_product_name: size,
      price: product.price * count,
    };
    setBody({
      ...body,
      product_item: [product_item],
      product_item_view: [product_item_view],
      delivery_methods_id: method,
    });
    dispatch(transactionAction.cart(body));
    return toast.success("Cart added successfully");
  };

  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.title}>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>
                    {product.category}
                    <span> &gt; {product.product_name}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 pb-5">
              <div className={styles["left-content"]}>
                <div className={styles["product-img"]}>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <img src={`${product.image}`} alt="cold-brew"></img>
                  )}
                </div>
                <h1>{product.product_name}</h1>
                <h3> {currency(product.price * count)}</h3>
                <Button text="Add to Cart" onClick={handleCart} />
                <Button text="Ask to Staff" variant="color-1" font="style-1" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 pt-md-2">
              <div className={styles["right-content"]}>
                <div className={styles.title}>
                  <p className={styles.top}>
                    Delivery only on <span>Monday to friday</span> at
                    <span> 1 - 7 pm</span>
                  </p>
                  <p className={styles.bottom}>{product.description}</p>
                </div>
                <div className={styles.size}>
                  <div className={styles.title}>
                    <h2>Choose a size</h2>
                  </div>
                  <div className={styles.choice}>
                    <div className={styles.circle} onClick={reguler}>
                      <p className={styles.reg}>R</p>
                    </div>
                    <div className={styles.circle} onClick={large}>
                      <p className={styles.lar}>L</p>
                    </div>
                    <div className={styles.circle} onClick={xtra}>
                      <p>XL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["deliv-method"]}>
                <div className={styles.title}>
                  <h3>Choose Delivery Methods</h3>
                </div>
                <div className={styles.methods}>
                  <div
                    className={styles.bar}
                    onClick={() => {
                      setMethod(1);
                    }}
                  >
                    <p>Dine in</p>
                  </div>
                  <div
                    className={styles.bar}
                    onClick={() => {
                      setMethod(3);
                    }}
                  >
                    <p>Door Delivery</p>
                  </div>
                  <div
                    className={styles.bar}
                    onClick={() => {
                      setMethod(2);
                    }}
                  >
                    <p>Pick up</p>
                  </div>
                </div>
                <div className={styles["set-time"]}>
                  <label>Set time :</label>
                  <input
                    type="text"
                    placeholder="Enter the time reservation"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`${styles.cta} row text-center`}>
            <div className="col-lg-8 offset-lg-1">
              <div className={styles["checkout-bar"]}>
                {isLoading ? (
                  <Loading />
                ) : (
                  <div className={styles.left}>
                    <div className={styles["checkout-img"]}>
                      <img src={`${product.image}`} alt="cold-brew"></img>
                    </div>
                    <div className={styles["checkout-detail"]}>
                      <h5>{product.product_name}</h5>
                      <p>
                        x{count}
                        <span> {sizeName}</span>
                      </p>
                    </div>
                  </div>
                )}

                <div className={styles["check-count"]}>
                  <div className={styles.btn} onClick={decreamentCount}>
                    <div className={styles.circle}></div>
                    <p>-</p>
                  </div>
                  <div className={styles.qty}>
                    <p>{count}</p>
                  </div>
                  <div className={styles.btn} onClick={increamentCount}>
                    <div className={styles.circle}></div>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div
                onClick={() => {
                  navigate("/payment");
                }}
              >
                <Button
                  text="CHECKOUT"
                  variant="color-4"
                  font="style-3"
                  route="/payment"
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

export default withNavigate(ProductDetails);
