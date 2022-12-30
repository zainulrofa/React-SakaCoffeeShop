import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/Modal.module.css";
import authAction from "../redux/actions/auth";

const Modal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.userData.token);

  const logoutHandler = () => {
    const LogoutSuccess = () => {
      toast.success("Logout successfully");
      navigate("/");
    };
    const LogoutError = (error) => {
      toast.error(`${error}`);
    };
    dispatch(authAction.logoutThunk(token, LogoutSuccess, LogoutError));
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
            <div className={styles["modal-footer"]}>
              <button className={styles.button} onClick={logoutHandler}>
                yes
              </button>
              <button
                className={styles.button}
                onClick={() => props.setOpen(!props)}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
