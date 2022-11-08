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
import { getData, getPromo } from "../helpers/fetch";
import withSearchParams from "../helpers/withSearchParams";
import { createSearchParams, Navigate, useLocation } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import { connect, useDispatch, useSelector } from "react-redux";
import action from "../redux/actions/product";

// const userinfo = JSON.parse(localStorage.getItem("userInfo"));
// let admin = null;

// if (userinfo && userinfo.payload.role === "Admin")
//   admin = userinfo.payload.role;
// console.log(admin);
// console.log(userinfo.payload);

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const Product = ({ setSearchParams, navigate }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const totalPage = useSelector((state) => state.products.meta);
  const getQuery = useQuery();
  const [promo, setPromo] = useState([]);
  // const [product, setProduct] = useState([]);
  // const [totalPage, setTotalPage] = useState(null);
  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    // categories: getQuery.get("categories") ? getQuery.get("categories") : "",
    // minPrice: getQuery.get("minPrice") ? getQuery.get("minPrice") : 0,
    // maxPrice: getQuery.get("maxPrice") ? getQuery.get("maxPrice") : 1000000,
    sort: getQuery.get("sort") ? getQuery.get("sort") : "popular",
    page: getQuery.get("page") ? getQuery.get("page") : 1,
  });

  console.log(products);
  // const fetchData = async (query) => {
  //   try {
  //     const products = await getData(`/products`, query);
  //     // setNext(products.data.meta.next);
  //     // setPrev(products.data.meta.prev);
  //     setQuery({
  //       ...query,
  //     });
  //     // console.log(products.data.result.result.data);
  //     setProduct(products.data.result.result.data);
  //     // console.log(products.data.result.result.meta);
  //     setTotalPage(products.data.result.result.meta.totalPage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(totalPage);
  useEffect(() => {
    // fetchData(query);
    dispatch(action.getProductsAction(query));
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    // setTotalPage(products.meta.totalPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // const [allProduct, setAllProduct] = useState([]);
  // const [param, setParam] = useState({
  //   categories: "",
  //   sort: "",
  // });

  const getAllPromo = async () => {
    try {
      const result = await getPromo();
      console.log(result.data.result);
      setPromo(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // const getAllProduct = async () => {
  //   try {
  //     const result = await getProduct(param);
  //     console.log(result);
  //     setAllProduct(result.data.result.result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleNonCofee = async () => {
  //   try {
  //     const body = { ...param, categories: "Non Coffee", sort: "" };
  //     console.log(body);
  //     setParam(body);
  //     const result = await getProduct(body);
  //     console.log(result.data.result.result.data);
  //     setAllProduct(result.data.result.result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleFavorite = async () => {
  //   try {
  //     const body = {
  //       ...param,
  //       sort: "popular",
  //       categories: "",
  //     };
  //     setParam(body);
  //     const result = await getProduct(body);
  //     setAllProduct(result.data.result.result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleFood = async () => {
  //   try {
  //     const body = { ...param, categories: "Foods", sort: "" };
  //     setParam(body);
  //     const result = await getProduct(body);
  //     setAllProduct(result.data.result.result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleCoffee = async () => {
  //   try {
  //     const body = { ...param, categories: "Coffee", sort: "" };
  //     setParam(body);
  //     const result = await getProduct(body);
  //     setAllProduct(result.data.result.result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleDropdown = (e) => {
    setIsActive(!isActive);
  };

  const role = JSON.parse(localStorage.getItem("userInfo")).payload.role || "";
  // useEffect(() => {
  console.log(role);
  //   let admin = null;

  //   if (userinfo && userinfo.payload.role === "Admin")
  //     admin = userinfo.payload.role;
  //   console.log(admin);
  //   console.log(userinfo.payload);
  // });

  useEffect(() => {
    getAllPromo();
  }, []);

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
              {promo?.map((e, index) => {
                console.log();
                return (
                  <CardPromo
                    title={e.promo_name}
                    discount={e.discount}
                    description={e.description}
                    code={e.code}
                    image={e.image}
                  />
                );
              })}
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
          {role === "Admin" && (
            <div
              className={styles["add-promo"]}
              onClick={() => {
                navigate("/product/add-promo");
              }}
            >
              <Button text="Add Promo" variant="color-4" font="style-1" />
            </div>
          )}
        </aside>
        <main className={styles["right-content"]}>
          <div className={styles["head-content"]}>
            <ul>
              <li
                onClick={() => {
                  setQuery({
                    sort: "popular",
                    page: 1,
                  });
                }}
              >
                Favorite Product
              </li>
              <li
                onClick={() => {
                  setQuery({
                    categories: "Coffee",
                    page: 1,
                  });
                  const urlSearchParams = createSearchParams({ ...query });
                  setSearchParams(urlSearchParams);
                }}
              >
                Coffee
              </li>
              <li
                onClick={() => {
                  setQuery({
                    categories: "Non Coffee",
                    page: 1,
                  });
                  const urlSearchParams = createSearchParams({ ...query });
                  setSearchParams(urlSearchParams);
                }}
              >
                Non Coffee
              </li>
              <li
                onClick={() => {
                  setQuery({
                    categories: "Foods",
                    page: 1,
                  });
                }}
              >
                Foods
              </li>
              <li>Add-on</li>
            </ul>
          </div>

          <div className={styles.dropdown}>
            <div className={styles["dropdown-btn"]} onClick={handleDropdown}>
              <h2>Sort by</h2>
              <span>&#9660;</span>
            </div>
            {isActive && (
              <div className={styles["dropdown-content"]}>
                <div className={styles["dropdown-item"]}>
                  <p
                    onClick={() => {
                      setQuery({
                        sort: "newest",
                        page: 1,
                      });
                      const urlSearchParams = createSearchParams({ ...query });
                      setSearchParams(urlSearchParams);
                    }}
                  >
                    newest
                  </p>
                </div>
                <div className={styles["dropdown-item"]}>
                  <p
                    onClick={() => {
                      setQuery({
                        sort: "oldest",
                        page: 1,
                      });
                      const urlSearchParams = createSearchParams({ ...query });
                      setSearchParams(urlSearchParams);
                    }}
                  >
                    oldest
                  </p>
                </div>
                <div className={styles["dropdown-item"]}>
                  <p
                    onClick={() => {
                      setQuery({
                        sort: "priciest",
                        page: 1,
                      });
                      const urlSearchParams = createSearchParams({ ...query });
                      setSearchParams(urlSearchParams);
                    }}
                  >
                    priciest
                  </p>
                </div>
                <div className={styles["dropdown-item"]}>
                  <p
                    onClick={() => {
                      setQuery({
                        sort: "cheapest",
                        page: 1,
                      });
                      const urlSearchParams = createSearchParams({ ...query });
                      setSearchParams(urlSearchParams);
                    }}
                  >
                    cheapest
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className={styles["content-detail"]}>
            {/* {allProduct?.map((e, index) => {
              console.log();
              return (
                <Card
                  key={index}
                  image={e.image}
                  text={e.product_name}
                  price={e.price}
                  id={e.id}
                  display="hidden"
                />
              );
            })} */}
            {products.map((e) => (
              <Card
                text={e.product_name}
                price={e.price}
                image={e.image}
                id={e.id}
                key={e.id}
              />
            ))}
          </div>
          <div className={`${styles["paginate-container"]}`}>
            <div className={styles["title-paginate"]}>
              <p>{`showing page ${query.page} of ${totalPage.totalPage}`}</p>
            </div>
            <div className={styles["btn-paginate"]}>
              <button
                onClick={() => {
                  setQuery({ ...query, page: query.page - 1 });
                }}
                disabled={query.page === 1 ? true : false}
                className={`${styles["btn-prev"]}`}
              >
                prev
              </button>
              <button
                onClick={() => {
                  setQuery({ ...query, page: query.page + 1 });
                }}
                disabled={query.page === totalPage ? true : false}
                className={`${styles["btn-next"]}`}
              >
                next
              </button>
            </div>
          </div>
          {role === "Admin" && (
            <div
              className={styles["add-product"]}
              onClick={() => {
                navigate("/product/add-product");
              }}
            >
              <Button text="Add Product" />
            </div>
          )}
        </main>
      </section>
      <Footer />
    </>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default withNavigate(withSearchParams(Product));
