import React from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import largeProfile from "../assets/img/image 39-1.png";
import pencil from "../assets/img/pencil.png";
import withNavigate from "../helpers/withNavigate";

function Profile({ navigate }) {
  return (
    <>
      <Header />
      <section className={styles["main-content"]}>
        <div className="container-fluids">
          <div className="container text-start">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.title}>User Profile</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluids">
          <div className="container">
            <div className="row">
              <div className={`${styles["left-content"]} col-lg-4`}>
                <div className={styles["profile-photo"]}>
                  <div className={styles["profile-img"]}>
                    <img
                      className={styles["profile-people"]}
                      src={largeProfile}
                      alt="profile"
                    />
                    <div className={styles["edit-pencil"]}>
                      <img src={pencil} alt="edit" />
                    </div>
                  </div>
                  <h2>Zulaikha</h2>
                  <p>zulaikha17@gmail.com</p>
                  <h3>Has been ordered 15 products</h3>
                </div>
              </div>
              <div className={`${styles["right-content"]} col-lg-8`}>
                <div className={styles.contact}>
                  <h2>Contacts</h2>
                  <div className={styles["contact-content"]}>
                    <div className={styles["edit-pencil"]}>
                      <img src={pencil} alt="edit" />
                    </div>
                    <div className={styles["input-contact"]}>
                      <div className={styles["left-contact"]}>
                        <div className={styles["input-div"]}>
                          <label for="emailaddress">Email Address:</label>
                          <input type="text" id="emailaddress" />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="deliveryaddress">Delivery Address:</label>
                          <input type="text" id="deliveryaddress" />
                        </div>
                      </div>
                      <div className={styles["right-contact"]}>
                        <div className={styles["input-div"]}>
                          <label for="mobilenumber">Mobile Number:</label>
                          <input type="tel" id="mobilenumber" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles["top-content"]}>
          <div className={styles["profile-photo"]}>
            <img src={largeProfile} alt="profile" />
            <img className={styles.pencil} src={pencil} alt="edit" />
            <h2>Zulaikha</h2>
            <p>zulaikha17@gmail.com</p>
            <h3>Has been ordered 15 products</h3>
          </div>
          <div className={styles.contact}>
            <h2>Contacts</h2>
            <div className={styles["contact-content"]}>
              <img className={styles["edit-pencil"]} src={pencil} alt="edit" />
              <div className={styles["input-contact"]}>
                <div className={styles["left-contact"]}>
                  <div className={styles["input-div"]}>
                    <label>Email Address:</label>
                    <input type="text" />
                  </div>
                  <div className={styles["input-div"]}>
                    <label>Delivery Address:</label>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles["right-contact"]}>
                  <div className={styles["input-div"]}>
                    <label>Mobile Number:</label>
                    <input type="tel" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container-fluids">
          <div className={`${styles["bottom-content"]} container`}>
            <div className="row">
              <div className="col-lg-8">
                <div className={styles.details}>
                  <h2>Details</h2>
                  <div className={styles["profile-detail"]}>
                    <div className={styles["edit-pencil"]}>
                      <img src={pencil} alt="edit" />
                    </div>
                    <div className={styles["input-profile"]}>
                      <div className={styles["left-profile"]}>
                        <div className={styles["input-div"]}>
                          <label for="displayname">Display name:</label>
                          <input type="text" id="displayname" />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="firstname">First name:</label>
                          <input type="text" id="firstname" />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="lastname">Last name:</label>
                          <input type="text" id="lastname" />
                        </div>
                      </div>
                      <div className={styles["right-profile"]}>
                        <div className={styles["input-div"]}>
                          <label for="date">DD/MM/YY:</label>
                          <input type="text" placeholder="DD/MM/YY" />
                        </div>
                        <div className={styles.gender}>
                          <div className={styles.male}>
                            <input type="radio" name="choice" id="male" />
                            <label for="male">Male</label>
                          </div>
                          <div className={styles.female}>
                            <input type="radio" name="choice" id="female" />
                            <label for="female">Famale</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.change}>
                  <p>Do you want to save the change?</p>
                  <div
                    className={styles["button-width"]}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <Button text="Save Data" />
                  </div>
                  <Button text="Cancel" variant="color-1" font="style-1" />
                  <div
                    className={styles["button-width"]}
                    onClick={() => {
                      navigate("/forget-password");
                    }}
                  >
                    <Button
                      text="Edit Password"
                      variant="color-2"
                      font="style-2"
                    />
                  </div>
                  <div
                    className={styles["button-width"]}
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    <Button text="Log out" variant="color-2" font="style-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles["bottom-content"]}>
          <div className={styles.details}>
            <h2>Details</h2>
            <div className={styles["profile-detail"]}>
              <div className={styles["edit-pencil"]}>
                <img src={pencil} alt="edit" />
              </div>
              <div className={styles["input-profile"]}>
                <div className={styles["left-profile"]}>
                  <div className={styles["input-div"]}>
                    <label>Display name:</label>
                    <input type="text" />
                  </div>
                  <div className={styles["input-div"]}>
                    <label>First name:</label>
                    <input type="text" />
                  </div>
                  <div className={styles["input-div"]}>
                    <label>Last name:</label>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles["right-profile"]}>
                  <div className={styles["input-div"]}>
                    <label>DD/MM/YY:</label>
                    <input type="text" placeholder="DD/MM/YY" />
                  </div>
                  <div className={styles.gender}>
                    <div className={styles.male}>
                      <input type="radio" name="choice" />
                      <label>Male</label>
                    </div>
                    <div className={styles.female}>
                      <input type="radio" name="choice" />
                      <label>Famale</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.change}>
            <p>Do you want to save the change?</p>
            <Button text="Save Data" />
            <Button text="Cancel" variant="color-1" font="style-1" />
            <Button text="Edit Password" variant="color-2" font="style-2" />
            <Button text="Log out" variant="color-2" font="style-2" />
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
}

export default withNavigate(Profile);
