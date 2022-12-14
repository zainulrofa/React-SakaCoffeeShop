import React from "react";
import styles from "../styles/ForgetPwd.module.css";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";
import withNavigate from "../helpers/withNavigate";

function ForgotPwd({ navigate }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState("");

  const changeHandler = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
    console.log(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const forgotSuccess = () => {
      toast.success(`Please check your email to get OTP code`);
      console.log("success");
      navigate("/reset-password");
    };

    const forgotDenied = (error) => {
      toast.error(error);
      console.log("error");
    };

    dispatch(authAction.forgotThunk(email, forgotSuccess, forgotDenied));
  };

  return (
    <>
      <main className={styles.content}>
        <div className={`${styles["top-content"]} container`}>
          <div className="row text-center">
            <div className="col-12">
              <div className={styles.title}>
                <h1>Forgot your password?</h1>
                <p>Don't worry, we got your back!</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container`}>
          <form
            className={`${styles["mid-content"]} row`}
            onSubmit={submitHandler}
          >
            <div className={`${styles["mid-content"]} row`}>
              <div className="col-lg-8 my-2">
                <div className={styles["email-bar"]}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email adress to get link"
                    onChange={changeHandler}
                  ></input>
                </div>
              </div>
              <div className="col-lg-4">
                <Button
                  type="submit"
                  text={isLoading ? "Loading..." : "Send"}
                  variant="color-1"
                  font="style-1"
                />
              </div>
            </div>
          </form>
        </div>
        {/* <div className={`${styles["bot-content"]} container`}>
          <div className="row text-center">
            <div className="col-12">
              <div className={styles.title}>
                <p>Click here if you didn't receive any link in 2 minutes</p>
                <div className={styles.btn}>
                  <Button text="Resend link" variant="color-3" />
                </div>
                <p className={styles.name}>01:54</p>
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <Footer />
    </>
  );
}

export default withNavigate(ForgotPwd);
