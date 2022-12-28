import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import withNavigate from "../helpers/withNavigate";
// import HeaderLogin from "../components/HeaderLogin";
// import NavbarSignup from "../components/NavbarSignup";

import defaultImg from "../assets/img/default-photo.png";
import sakaLogo from "../assets/img/sakacoffee.png";
import searching from "../assets/img/Searching.png";
import chat from "../assets/img/chat.png";
import { getProfile } from "../helpers/fetch";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getProfileActions } from "../redux/actions/profile";

function Header({ navigate }) {
  const [state, setState] = useState("");
  const text = state.text;
  const title = state.title;
  // const [profile, setProfile] = useState({});
  // const profile = useSelector((state) => state.profile.profile);
  const [search, setSearch] = useState(() => "");
  const [show, setShow] = useState(false);
  // console.log(element);

  const token = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : "";

  const role = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo")).payload.role
    : "";

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

  // const getDataProfile = async () => {
  //   try {
  //     const result = await getProfile();
  //     // console.log(result.data.result[0]);
  //     setProfile(result.data.result[0]);
  //     console.log(result);
  //   } catch (error) {
  //     // console.log(error);
  //     // console.log(error.response.data.statusCode);
  //     if (error.response.data.statusCode === 403) {
  //       navigate("/login");
  //     }
  //   }
  // };

  const handleLogout = async () => {
    try {
      localStorage.removeItem("userInfo");
      navigate("/login");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProfileActions());
  // }, []);

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
                navigate("/");
              }}
            >
              Orders
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
        role === "Admin" ? (
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
              // onClick={() => {
              //   navigate("/profile");
              // }}
            >
              <button onClick={handleShow}>Logout</button>
            </div>
          </section>
        ) : (
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
              <img
                // src={`http://localhost:8060/${profile.image}`}
                alt="profile"
              />
            </div>
          </section>
        )
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Saka Coffee Shop</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kamu yakin mau keluar?</Modal.Body>
        <Modal.Footer>
          <Button className={styles["close-btn"]} onClick={handleClose}>
            Close
          </Button>
          <Button className={styles["yes-btn"]} onClick={handleLogout}>
            Iyah
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default withNavigate(Header);
