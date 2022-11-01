import { React, useState } from "react";
import styles from "../styles/NavbarSignup.module.css";
import withNavigate from "../helpers/withNavigate";

import searching from "../assets/img/Searching.png";
import chat from "../assets/img/chat.png";
import smallProfile from "../assets/img/image 39.png";

function NavbarSignup({ navigate }) {
  const [state, setState] = useState("");
  const title = state.title;

  function searchBar() {
    setState((state) => ({
      title: state.title === `${styles.show}` ? "" : `${styles.show}`,
    }));
  }

  return (
    <div className={styles["right-bar"]}>
      <div className={styles.searching}>
        <input className={title} type="text" placeholder="search product ..." />
        <div className={styles["search-img"]} onClick={searchBar}>
          <img src={searching} alt="searching" />
        </div>
      </div>
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
        <img src={smallProfile} alt="profile" />
      </div>
    </div>
  );
}

export default withNavigate(NavbarSignup);
