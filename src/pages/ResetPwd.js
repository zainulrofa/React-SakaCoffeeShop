import React from "react";
import styles from "../styles/ResetPwd.module.css";
import Footer from "../components/Footer";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";
import withNavigate from "../helpers/withNavigate";

function ForgotPwd({ navigate }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [body, setBody] = useState({
    otp: "",
    new_password: "",
    confirm_password: "",
  });

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const forgotSuccess = () => {
      toast.success(`Congrats! Your password updated successfully`);
      console.log("success");
      navigate("/login");
    };

    const forgotDenied = (error) => {
      toast.error(error);
      console.log("error");
    };

    dispatch(authAction.resetThunk(body, forgotSuccess, forgotDenied));
  };

  return (
    <>
      <main className={styles.content}>
        <div className={`${styles["top-content"]} container`}>
          <div className="row text-center">
            <div className="col-12">
              <div className={styles.title}>
                <h1>One Step Again!</h1>
                <p>Enter your OTP to reset your password</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container`}>
          <form className={styles["full-width"]} onSubmit={submitHandler}>
            <div className={styles["input-div"]}>
              <label>Email Address:</label>
              <input
                name="otp"
                type="text"
                placeholder="Enter your OTP"
                onChange={changeHandler}
              />
            </div>
            <div className={styles["input-div"]}>
              <label>New Password:</label>
              <input
                name="new_password"
                type="password"
                placeholder="Enter your new password"
                onChange={changeHandler}
              />
            </div>
            <div className={styles["input-div"]}>
              <label>Confirm Your Password:</label>
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm your new password"
                onChange={changeHandler}
              />
            </div>
            <button type="submit" className={styles["btn-signup"]}>
              {isLoading ? "Loading..." : "Reset Password"}
            </button>
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
