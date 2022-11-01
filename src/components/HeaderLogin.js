import React from "react";
import styles from "../styles/HeaderLogin.module.css";
import withNavigate from "../helpers/withNavigate";

function Header({ navigate }) {
  return (
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
  );
}

export default withNavigate(Header);
