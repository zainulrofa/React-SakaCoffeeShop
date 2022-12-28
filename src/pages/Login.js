import React, { Fragment, useState } from "react";
import styles from "../styles/Login.module.css";
import withNavigate from "../helpers/withNavigate";
import Footer from "../components/Footer";

import coffeeBack from "../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import sakaLogo from "../assets/img/sakacoffee.png";
import googleLogo from "../assets/img/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import authAction from "../redux/actions/auth";

function Login({ navigate }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [body, setBody] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const loginSuccess = () => {
      toast.success(`Congrats! Login successfully! Welcome ${body.email}`);
      console.log("success");
      navigate("/");
    };

    const loginDenied = (error) => {
      toast.error(error);
      console.log("error");
    };

    dispatch(authAction.loginThunk(body, loginSuccess, loginDenied));
  };

  return (
    <Fragment>
      <main className={styles.container}>
        <aside className={styles["side-content"]}>
          <img src={coffeeBack} alt="background coffee" />
        </aside>
        <section className={styles["form-content"]}>
          <div className={styles["head-content"]}>
            <div
              className={styles["logo-detail"]}
              onClick={() => {
                navigate("/");
              }}
            >
              <img className={styles.logo} src={sakaLogo} alt="saka logo" />
              <h2>Saka Coffee Shop</h2>
            </div>
            <div
              className={styles["right-head-content"]}
              onClick={() => {
                navigate("/signup");
              }}
            >
              <h3>Sign up</h3>
            </div>
          </div>
          <div className={styles["signup-content"]}>
            <h1>Login</h1>
            <form className={styles["full-width"]} onSubmit={submitHandler}>
              <div className={styles["input-div"]}>
                <label>Email Address:</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                  onChange={changeHandler}
                />
              </div>
              <div className={styles["input-div"]}>
                <label>Password:</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={changeHandler}
                />
              </div>
              <div className={styles["input-div"]}>
                <div
                  className={styles["forget-password"]}
                  onClick={() => {
                    navigate("/forget-password");
                  }}
                >
                  Forgot password?
                </div>
              </div>
              <button type="submit" className={styles["btn-signup"]}>
                {isLoading ? "Loading..." : "Login"}
              </button>
              <div className={styles["btn-google"]}>
                <img src={googleLogo} alt="google logo" />
                <p>Sign up with Google</p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <section className={styles["get-member"]}>
        <div className={styles["info-member"]}>
          <h2>Get your member card now!</h2>
          <p>Let's join with our member and enjoy the deals.</p>
        </div>
        <div className={styles["btn-create"]}>
          <h2>Create Now</h2>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default withNavigate(Login);
