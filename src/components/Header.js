import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import withNavigate from "../helpers/withNavigate";
// import HeaderLogin from "../components/HeaderLogin";
// import NavbarSignup from "../components/NavbarSignup";

import sakaLogo from "../assets/img/sakacoffee.png";
import searching from "../assets/img/Searching.png";
import chat from "../assets/img/chat.png";
import { getProfile } from "../helpers/fetch";

function Header({ navigate }) {
  const [state, setState] = useState("");
  const text = state.text;
  const title = state.title;
  const [profile, setProfile] = useState({});
  const [search, setSearch] = useState(() => "");
  // console.log(element);

  const token = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : "";

  const role = JSON.parse(localStorage.getItem("userInfo")).payload.role || "";

  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}` ? "" : `${styles["slide-bar"]}`,
    }));
  }

  function searchBar() {
    setState((state) => ({
      title: state.title === `${styles.show}` ? "" : `${styles.show}`,
    }));
  }

  const setValue = (event) => {
    console.log(event);
    setSearch(event.target.value);
  };
  const getSearch = () => {
    return navigate(`/product?search=${search}`);
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      // console.log(result.data.result[0]);
      setProfile(result.data.result[0]);
      console.log(result);
    } catch (error) {
      // console.log(error);
      // console.log(error.response.data.statusCode);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div
            className={styles["logo-img"]}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={sakaLogo} alt="logo" />
          </div>
          <p
            className={styles["logo-title"]}
            onClick={() => {
              navigate("/");
            }}
          >
            Saka Coffee Shop
          </p>
        </div>
        {role === "Admin" ? (
          <ol className={text}>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/product");
              }}
            >
              Product
            </li>
            <li
              onClick={() => {
                navigate("/payment");
              }}
            >
              Your Cart
            </li>
            <li
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </li>
          </ol>
        ) : (
          <ol className={text}>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/product");
              }}
            >
              Product
            </li>
            <li
              onClick={() => {
                navigate("/payment");
              }}
            >
              Your Cart
            </li>
            <li
              onClick={() => {
                navigate("/history");
              }}
            >
              History
            </li>
          </ol>
        )}
      </div>
      {token ? (
        <section className={text}>
          <form className={styles.searching} onSubmit={getSearch}>
            <input
              className={title}
              type="text"
              placeholder="search here ..."
              onChange={setValue}
            />
            <div className={styles["search-img"]} onClick={searchBar}>
              <img src={searching} alt="searching" />
            </div>
          </form>
          <div className={styles.chat}>
            <div className={styles.notif}>1</div>
            <img src={chat} alt="" />
          </div>
          <div
            className={styles.profile}
            onClick={() => {
              navigate("/profile");
            }}
          >
            <img src={`http://localhost:8060/${profile.image}`} alt="profile" />
          </div>
        </section>
      ) : (
        <section className={text}>
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
              <p
                className={styles["btn-login"]}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
              <button
                className={styles["btn-sign"]}
                type="submit"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </section>
      )}
      <div className={styles["menu-toggle"]} onClick={slide}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default withNavigate(Header);
