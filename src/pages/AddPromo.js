import React, { Fragment, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/AddPromo.module.css";
import camera from "../assets/img/camera.png";
import { useNavigate } from "react-router-dom";
// import Toast from "../components/Toast/Toast";
import { postPromo } from "../helpers/fetch";

const AddPromo = () => {
  const token = JSON.parse(localStorage.getItem("userInfo")).token || "";
  const refTarget = useRef(null);
  const navigate = useNavigate();
  const [toastInfo, setToastInfo] = useState({ display: false });
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return setToastInfo({
        display: true,
        status: "error",
        message: "Extension file wrong! Only .jpeg, .jpg, .png are allowed.",
      });

    if (photo.size > defaultSize)
      return setToastInfo({
        display: true,
        status: "error",
        message: "File to large. Max. file size 2 Mb",
      });
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };
  const submitHandler = async () => {
    if (
      !body.code ||
      !body.description ||
      !body.discount ||
      !body.duration ||
      !body.image ||
      !body.min_price ||
      !body.promo_name
    ) {
      return setToastInfo({
        display: true,
        status: "error",
        message: "All input must be fulfilled",
      });
    }
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    try {
      const response = await postPromo(token, formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(token, body);
  return (
    <Fragment>
      {/* <Toast
        status={toastInfo.status}
        message={toastInfo.message}
        display={!toastInfo.display ? "none" : "flex"}
        changeState={(value) => {
          setToastInfo({ display: value });
        }}
      /> */}
      <Header />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; Add new promo</span>
        </p>
        <section className={styles["main-section"]}>
          <section className={`${styles["content"]} ${styles["left"]}`}>
            <form action="submit">
              <div
                className={`${styles["image-container"]} `}
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
              >
                <img
                  src={camera}
                  className={imgPrev ? styles.none : "image-dummy"}
                  alt="promo"
                />
                <img
                  className={styles[!imgPrev ? "none" : "image-preview"]}
                  src={imgPrev}
                  alt="preview"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["btn"]} ${styles["btn-take-pic"]}`}
              >
                Take Picture
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["btn"]} ${styles["btn-choose-gallery"]}`}
              >
                Choose From Gallery
              </button>
              <input
                onChange={(e) => imageHandler(e)}
                ref={refTarget}
                type="file"
                style={{ display: "none" }}
              />
            </form>
            <form action="" className={styles["form-discount"]}>
              <label htmlFor="discount">Enter Discount:</label>
              <input onChange={changeHandler} name="discount" type="text" />
              <label htmlFor="durations">Durations:</label>
              <input onChange={changeHandler} name="duration" type="number" />
              <label htmlFor="code">Input Coupon Code:</label>
              <input onChange={changeHandler} name="code" type="text" />
            </form>
          </section>
          <section className={`${styles["content"]} ${styles["right"]}`}>
            <form action="">
              <label htmlFor="name">Name:</label>
              <input
                onChange={changeHandler}
                name="promo_name"
                type="text"
                placeholder="Input promo name"
              />
              <label htmlFor="price">Price:</label>
              <input
                onChange={changeHandler}
                name="min_price"
                placeholder="Input price"
                type="text"
              />
              <label htmlFor="description">Description:</label>
              <input
                name="description"
                onChange={changeHandler}
                placeholder="Input description"
                type="text"
              />
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={() => {
                  submitHandler();
                }}
                className={`${styles["btn"]} ${styles["btn-save"]}`}
              >
                Save Promo
              </button>
              <button className={`${styles["btn"]} ${styles["btn-cancel"]}`}>
                Cancel
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AddPromo;
