import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/ModalEditPwd.module.css";
import authAction from "../redux/actions/auth";

const Modal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.userData.token);
  const [body, setBody] = useState({
    old_password: "",
    new_password: "",
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
      //   navigate("/profile");
    };

    const forgotDenied = (error) => {
      toast.error(error);
      console.log("error");
    };

    dispatch(
      authAction.editPassThunk(body, token, forgotSuccess, forgotDenied)
    );
  };
  return (
    <>
      {props.open ? (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>{props.title}</p>
            </div>
            <div className={styles["modal-body"]}>{props.body}</div>
            <form className={styles["full-width"]}>
              <div className={styles["input-div"]}>
                <label>Old Password:</label>
                <input
                  name="old_password"
                  type="password"
                  placeholder="Enter your old password"
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
              <div className={styles["modal-footer"]}>
                <button
                  className={styles.button}
                  onClick={() => props.setOpen(!props)}
                >
                  Cancel
                </button>
                <button className={styles.button} onClick={submitHandler}>
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
