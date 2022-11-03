import { React, useState } from "react";
import styles from "../styles/NavbarSignup.module.css";
import withNavigate from "../helpers/withNavigate";

import searching from "../assets/img/Searching.png";
import chat from "../assets/img/chat.png";
// import smallProfile from "../assets/img/image 39.png";
import { getProfile } from "../helpers/fetch";
import { useEffect } from "react";

function NavbarSignup({ navigate }) {
  const [title, setTitle] = useState("");
  const [profile, setProfile] = useState({});

  function searchBar() {
    setTitle((state) => ({
      title: state.title === `${styles.show}` ? "" : `${styles.show}`,
    }));
  }

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
        <img src={`http://localhost:8060/${profile.image}`} alt="profile" />
      </div>
    </div>
  );
}

export default withNavigate(NavbarSignup);
