import React, { Fragment } from "react";
import styles from "../styles/Signup.module.css";
import withNavigate from "../helpers/withNavigate";
import Footer from "../components/Footer";

import coffeeBack from "../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png";
import sakaLogo from "../assets/img/sakacoffee.png";
import googleLogo from "../assets/img/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import authAction from "../redux/actions/auth";

// class Signup extends Component {
//   // state = {
//   //   isPwdShown: false,
//   // };
//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const body = {
//       email: event.target.email.value,
//       password: event.target.password.value,
//       phone_number: event.target.phone.value,
//     };
//     console.log(body);
//     try {
//       const result = await signup(body);
//       console.log(result);
//       alert("Register success");
//       this.props.navigate("/login");
//     } catch (error) {
//       console.log(error);
//       // alert(error)
//     }
//   };

//   render() {
//     return (
//       <>
//         <main className={styles.container}>
//           <aside className={styles["side-content"]}>
//             <img src={coffeeBack} alt="background coffee" />
//           </aside>
//           <section className={styles["form-content"]}>
//             <div className={styles["head-content"]}>
//               <div
//                 className={styles["logo-detail"]}
//                 onClick={() => {
//                   this.props.navigate("/");
//                 }}
//               >
//                 <img className={styles.logo} src={sakaLogo} alt="saka logo" />
//                 <h2>Saka Coffee Shop</h2>
//               </div>
//               <div
//                 className={styles["right-head-content"]}
//                 onClick={() => {
//                   this.props.navigate("/login");
//                 }}
//               >
//                 <h3>Login</h3>
//               </div>
//             </div>
//             <div className={styles["signup-content"]}>
//               <h1>Sign Up</h1>
//               <form
//                 className={styles["full-width"]}
//                 onSubmit={this.handleSubmit}
//               >
//                 <div className={styles["input-div"]}>
//                   <label>Email Address:</label>
//                   <input
//                     type="text"
//                     name="email"
//                     required
//                     placeholder="Enter your email address"
//                   />
//                 </div>
//                 <div className={styles["input-div"]}>
//                   <label>Password:</label>
//                   <input
//                     type="password"
//                     name="password"
//                     required
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <div className={styles["input-div"]}>
//                   <label>Phone Number:</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//                 <button className={styles["btn-signup"]} type="submit">
//                   <p>Sign up</p>
//                 </button>
//                 <div className={styles["btn-google"]}>
//                   <img src={googleLogo} alt="google logo" />
//                   <p>Sign up with Google</p>
//                 </div>
//               </form>
//             </div>
//           </section>
//         </main>
//         <section className={styles["get-member"]}>
//           <div className={styles["info-member"]}>
//             <h2>Get your member card now!</h2>
//             <p>Let's join with our member and enjoy the deals.</p>
//           </div>
//           <div className={styles["btn-create"]}>
//             <h2>Create Now</h2>
//           </div>
//         </section>
//         <Footer />
//       </>
//     );
//   }
// }

function Signup({ navigate }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password_user: "",
    phone_number: "",
  });

  const toastHandler = () => {
    toast.success("TEST");
    console.log("test");
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registSuccess = () => {
      toast.success("Congrats! Register Successfully, Please login");
      console.log("success");
      navigate("/login");
    };

    const registDenied = (error) => {
      toast.error(error);
      console.log("error");
    };

    dispatch(authAction.registerThunk(form, registSuccess, registDenied));
  };

  return (
    <Fragment>
      <main className={styles.container}>
        <aside className={styles["side-content"]}>
          <img src={coffeeBack} alt="background coffee" />
        </aside>
        <section className={styles["form-content"]}>
          <div className={styles["head-content"]}>
            <div
              className={styles["logo-detail"]}
              onClick={() => {
                navigate("/");
              }}
            >
              <img className={styles.logo} src={sakaLogo} alt="saka logo" />
              <h2>Saka Coffee Shop</h2>
            </div>
            <div
              className={styles["right-head-content"]}
              // onClick={() => {
              //   navigate("/login");
              // }}
              onClick={toastHandler}
            >
              <h3>Login</h3>
            </div>
          </div>
          <div className={styles["signup-content"]}>
            <h1>Sign Up</h1>
            <form className={styles["full-width"]} onSubmit={handleSubmit}>
              <div className={styles["input-div"]}>
                <label>Email Address:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  onChange={changeHandler}
                />
              </div>
              <div className={styles["input-div"]}>
                <label>Password:</label>
                <input
                  type="password"
                  name="password_user"
                  placeholder="Enter your password"
                  required
                  onChange={changeHandler}
                />
                <FontAwesomeIcon icon="fa-solid fa-eye" />
              </div>
              <div className={styles["input-div"]}>
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  required
                  onChange={changeHandler}
                />
              </div>
              <button type="submit" className={styles["btn-signup"]}>
                Sign up
              </button>
              <div className={styles["btn-google"]}>
                <img src={googleLogo} alt="google logo" />
                <p>Sign up with Google</p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <section className={styles["get-member"]}>
        <div className={styles["info-member"]}>
          <h2>Get your member card now!</h2>
          <p>Let's join with our member and enjoy the deals.</p>
        </div>
        <div className={styles["btn-create"]}>
          <h2>Create Now</h2>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default withNavigate(Signup);
