import React from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

// import defaultImg from "../assets/img/default-photo.png";
import pencil from "../assets/img/pencil.png";
import withNavigate from "../helpers/withNavigate";
import { useState, useEffect, useRef } from "react";
import { editProfile, getProfile } from "../helpers/fetch";
import { useDispatch, useSelector } from "react-redux";
// import { getProfileActions } from "../redux/actions/profile";

function Profile({ navigate }) {
  const dispatch = useDispatch();
  const target = useRef(null);
  // const profile = useSelector((state) => state.profile.profile);
  // const [profile, setProfile] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const [imgPrev, setImgPrev] = useState(null);
  const [body, setBody] = useState({});
  console.log(body);

  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  // const changeHandler = (e) => [
  //   setBody({ ...body, [e.target.name]: e.target.value }),
  // ];
  const handleAddress = (e) => {
    setBody({ ...body, delivery_address: e.target.value });
    setDeliveryAddress(e.target.value);
  };
  const handleDisplayName = (e) => {
    setBody({ ...body, display_name: e.target.value });
    setDisplayName(e.target.value);
  };
  const handleFirstName = (e) => {
    setBody({ ...body, first_name: e.target.value });
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setBody({ ...body, last_name: e.target.value });
    setLastName(e.target.value);
  };
  const handleGender = (e) => {
    setBody({ ...body, gender: e.target.value });
  };
  const handleImage = (e) => {
    console.log(e);
    setBody({ ...body, image: e.target.files[0] });
    setImgPrev(URL.createObjectURL(e.target.files[0]));
  };

  // const getDataProfile = async () => {
  //   try {
  //     const result = await getProfile();
  //     console.log(result.data.result[0]);
  //     setProfile(result.data.result[0]);
  //   } catch (error) {
  //     // console.log(error);
  //     // console.log(error.response.data.statusCode);
  //     if (error.response.data.statusCode === 403) {
  //       navigate("/login");
  //     }
  //   }
  // };

  const handleSaveChange = async () => {
    const formData = new FormData();
    Object.keys(body).forEach((key, idx) => {
      formData.append(key, body[key]);
    });
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    // }
    try {
      await editProfile(formData);
      setBody({});
      setIsEdit(true);
      // await dispatch(getProfileActions());
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setDisplayName("");
    setFirstName("");
    setLastName("");
    setDeliveryAddress("");
    setEmailAddress("");
    setMobileNumber("");
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem("userInfo");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => [
    setBody({ ...body, [e.target.name]: e.target.value }),
  ];

  // const getBirthday = () => {
  //   const date = new Date(profile.birthday);
  //   const yyyy = date.getFullYear();
  //   let mm = date.getMonth() + 1; // Months start at 0!
  //   let dd = date.getDate();

  //   if (dd < 10) dd = "0" + dd;
  //   if (mm < 10) mm = "0" + mm;

  //   return dd + "/" + mm + "/" + yyyy;
  // };

  // useEffect(() => {
  //   dispatch(getProfileActions());
  // }, []);

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
                      // src={imgPrev ?? `http://localhost:8060/${profile.image}`}
                      alt="profile"
                    />
                    <div
                      className={styles["edit-pencil"]}
                      onClick={(e) => {
                        e.preventDefault();
                        target.current.click();
                      }}
                    >
                      <img src={pencil} alt="edit" />
                    </div>
                    <input
                      type="file"
                      ref={target}
                      onChange={(e) => handleImage(e)}
                      style={{ display: "none" }}
                    />
                  </div>
                  {/* <h2>{profile.display_name}</h2> */}
                  {/* <p>{profile.email}</p> */}
                  <h3>Has been ordered 1 products</h3>
                </div>
              </div>
              <div className={`${styles["right-content"]} col-lg-8`}>
                <div className={styles.contact}>
                  <h2>Contacts</h2>
                  <div className={styles["contact-content"]}>
                    <div
                      className={styles["edit-pencil"]}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsEdit(!isEdit);
                      }}
                    >
                      <img src={pencil} alt="edit" />
                    </div>
                    <div className={styles["input-contact"]}>
                      <div className={styles["left-contact"]}>
                        <div className={styles["input-div"]}>
                          <label for="emailaddress">Email Address:</label>
                          <input
                            type="text"
                            id="emailaddress"
                            disabled={isEdit}
                            value={emailAddress}
                            // placeholder={profile.email}
                          />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="deliveryaddress">Delivery Address:</label>
                          <input
                            type="text"
                            id="deliveryaddress"
                            onChange={handleAddress}
                            disabled={isEdit}
                            value={deliveryAddress}
                            // placeholder={profile.address}
                          />
                        </div>
                      </div>
                      <div className={styles["right-contact"]}>
                        <div className={styles["input-div"]}>
                          <label for="mobilenumber">Mobile Number:</label>
                          <input
                            type="tel"
                            id="mobilenumber"
                            disabled={isEdit}
                            value={mobileNumber}
                            // placeholder={profile.mobile_phone}
                          />
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
                          <input
                            type="text"
                            id="displayname"
                            onChange={handleDisplayName}
                            disabled={isEdit}
                            value={displayName}
                            // placeholder={profile.display_name}
                          />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="firstname">First name:</label>
                          <input
                            type="text"
                            id="firstname"
                            onChange={handleFirstName}
                            disabled={isEdit}
                            value={firstName}
                            // placeholder={profile.first_name}
                          />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="lastname">Last name:</label>
                          <input
                            type="text"
                            id="lastname"
                            onChange={handleLastName}
                            disabled={isEdit}
                            value={lastName}
                            // placeholder={profile.last_name}
                          />
                        </div>
                      </div>
                      <div className={styles["right-profile"]}>
                        <div className={styles["input-div"]}>
                          <label for="date">Birthday:</label>
                          <input
                            disabled={isEdit}
                            onChange={changeHandler}
                            name="birthday"
                            type={isEdit ? "text" : "date"}
                            // placeholder={getBirthday()}
                          />
                        </div>
                        <div className={styles.gender}>
                          <div className={styles.male}>
                            {isEdit ? (
                              <input
                                // className={`${styles.circle} ${styles.cursor}`}
                                // onChange={handleGender}
                                type="radio"
                                value="male"
                                // checked={
                                //   profile.gender === "male" ? true : false
                                // }
                                name="gender"
                              />
                            ) : (
                              <input
                                // className={`${styles.circle} ${styles.cursor}`}
                                onChange={handleGender}
                                type="radio"
                                value="male"
                                name="gender"
                              />
                            )}
                            <label for="male">Male</label>
                          </div>
                          <div className={styles.female}>
                            {isEdit ? (
                              <input
                                // className={`${styles.circle} ${styles.cursor}`}
                                // onChange={handleGender}
                                type="radio"
                                value="female"
                                // checked={
                                //   profile.gender === "female" ? true : false
                                // }
                                name="gender"
                              />
                            ) : (
                              <input
                                // className={`${styles.circle} ${styles.cursor}`}
                                onChange={handleGender}
                                type="radio"
                                value="female"
                                name="gender"
                              />
                            )}
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
                    onClick={handleSaveChange}
                  >
                    <Button text="Save Data" />
                  </div>
                  <div
                    className={styles["button-width"]}
                    onClick={handleCancel}
                  >
                    <Button text="Cancel" variant="color-1" font="style-1" />
                  </div>

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
                    onClick={handleLogout}
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
