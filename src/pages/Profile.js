import React from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

// import defaultImg from "../assets/img/default-photo.png";
import defaultImg from "../assets/img/default-img.png";
import pencil from "../assets/img/pencil.png";
import withNavigate from "../helpers/withNavigate";
import { useState, useEffect, useRef } from "react";
// import { editProfile, getProfile } from "../helpers/fetch";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../redux/actions/user";
import { toast } from "react-toastify";
import Modal from "../components/ModalLogout";
import ModalPwd from "../components/ModalEditPwd";

function Profile({ navigate }) {
  const dispatch = useDispatch();
  const target = useRef(null);
  const token = useSelector((state) => state.auth.userData.token);
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.isLoading);
  // const [profile, setProfile] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [pwd, setPwd] = useState(false);
  const [imgPrev, setImgPrev] = useState(null);
  const [body, setBody] = useState({});
  console.log(body);

  const changeHandler = (e) => [
    setBody({ ...body, [e.target.name]: e.target.value }),
  ];

  const handleImage = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return toast.error(
        "Extension file wrong! Only .jpeg, .jpg, .png are allowed."
      );

    if (photo.size > defaultSize)
      return toast.error("File to large. Max. file size 2 Mb");
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };

  const handleSaveChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });

    const profileSuccess = () => {
      toast.success(`Congrats! Your profile updated successfully`);
      console.log("success");
    };

    const profileDenied = (error) => {
      toast.error(error);
      console.log("error");
    };

    dispatch(
      userAction.editProfileThunk(
        formData,
        token,
        profileSuccess,
        profileDenied
      )
    );
  };

  const handleCancel = () => {};
  // const handleLogout = async () => {
  //   try {
  //     localStorage.removeItem("userInfo");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getBirthday = () => {
    const date = new Date(user.date_of_birth);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  };

  const handleLogout = async () => {
    setOpen(!open);
  };

  const handleEditPwd = async () => {
    setPwd(!pwd);
  };

  useEffect(() => {
    dispatch(userAction.getUserThunk(token));
  }, [dispatch, token]);

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
                  {user.image ? (
                    <div className={styles["profile-img"]}>
                      <img
                        className={styles["profile-people"]}
                        src={imgPrev ?? user.image}
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
                  ) : (
                    <div className={styles["profile-img"]}>
                      <img
                        className={styles["profile-people"]}
                        src={defaultImg}
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
                  )}
                  <h2>{user.display_name ? user.display_name : "username"}</h2>
                  <p>{user.email}</p>
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
                            value={user.email}
                            placeholder={user.email}
                          />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="deliveryaddress">Delivery Address:</label>
                          <input
                            type="text"
                            id="deliveryaddress"
                            name="delivery_address"
                            onChange={changeHandler}
                            disabled={isEdit}
                            // value={body.delivery_address}
                            placeholder={
                              user.delivery_address
                                ? user.delivery_address
                                : "Input here"
                            }
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
                            value={user.phone_number}
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
                    <div
                      className={styles["edit-pencil"]}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsEdit(!isEdit);
                      }}
                    >
                      <img src={pencil} alt="edit" />
                    </div>
                    <div className={styles["input-profile"]}>
                      <div className={styles["left-profile"]}>
                        <div className={styles["input-div"]}>
                          <label for="displayname">Display name:</label>
                          <input
                            type="text"
                            id="displayname"
                            name="display_name"
                            onChange={changeHandler}
                            disabled={isEdit}
                            // value={user.display_name}
                            placeholder={
                              user.display_name
                                ? user.display_name
                                : "Input here"
                            }
                          />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="firstname">First name:</label>
                          <input
                            type="text"
                            id="firstname"
                            name="first_name"
                            onChange={changeHandler}
                            disabled={isEdit}
                            // value={user.first_name}
                            placeholder={
                              user.first_name ? user.first_name : "Input here"
                            }
                          />
                        </div>
                        <div className={styles["input-div"]}>
                          <label for="lastname">Last name:</label>
                          <input
                            type="text"
                            id="lastname"
                            name="last_name"
                            onChange={changeHandler}
                            disabled={isEdit}
                            // value={user.last_name}
                            placeholder={
                              user.last_name ? user.last_name : "Input here"
                            }
                          />
                        </div>
                      </div>
                      <div className={styles["right-profile"]}>
                        <div className={styles["input-div"]}>
                          <label for="date">Birthday:</label>
                          <input
                            disabled={isEdit}
                            onChange={changeHandler}
                            name="date_of_birth"
                            type={isEdit ? "text" : "date"}
                            placeholder={getBirthday()}
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
                                checked={user.gender === "male" ? true : false}
                                name="gender"
                              />
                            ) : (
                              <input
                                // className={`${styles.circle} ${styles.cursor}`}
                                onChange={changeHandler}
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
                                checked={
                                  user.gender === "female" ? true : false
                                }
                                name="gender"
                              />
                            ) : (
                              <input
                                // className={`${styles.circle} ${styles.cursor}`}
                                onChange={changeHandler}
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
                    <Button text={isLoading ? "Loading..." : "Save Data"} />
                  </div>
                  <div
                    className={styles["button-width"]}
                    onClick={handleCancel}
                  >
                    <Button text="Cancel" variant="color-1" font="style-1" />
                  </div>

                  <div className={styles["button-width"]}>
                    <Button
                      text="Edit Password"
                      variant="color-2"
                      font="style-2"
                      onClick={handleEditPwd}
                    />
                  </div>
                  <div
                    className={styles["button-width"]}
                    // onClick={handleLogout}
                  >
                    <Button
                      text="Log out"
                      variant="color-2"
                      font="style-2"
                      onClick={handleLogout}
                    />
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
      <Modal
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Are you sure want to log out?"
      />
      <ModalPwd
        open={pwd}
        setOpen={setPwd}
        title="Edit Password"
        // body="Are you sure want to log out?"
      />
      <Footer />
    </>
  );
}

export default withNavigate(Profile);
