import React from "react";
import styles from "../styles/Dashboard.module.css";
import more from "../assets/img/more.png";
import jan from "../assets/img/jan.png";
import feb from "../assets/img/feb.png";
import mar from "../assets/img/mar.png";
import apr from "../assets/img/apr.png";
import may from "../assets/img/may.png";
import jun from "../assets/img/jun.png";
import jan1 from "../assets/img/jan1.png";
import feb1 from "../assets/img/feb1.png";
import mar1 from "../assets/img/mar1.png";
import apr1 from "../assets/img/apr1.png";
import may1 from "../assets/img/may1.png";
import jun1 from "../assets/img/jun1.png";
// import parker from "../assets/img/r.jpeg";
import progress from "../assets/img/progress.png";
import goalicon from "../assets/img/goal.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  //   const isAdmin = localStorage.getItem("role") === "Admin";

  return (
    <>
      <Header />
      <div className={styles.bordercontainer}>
        <div className={styles.centerin}>
          <div className={styles.topContent}>
            <h1>See how your store progress so far</h1>
            <div className={styles.radioOption}>
              <div id={styles.checkboxes}>
                <div className={styles.checkboxgroup}>
                  <input
                    className={styles.inputprofile}
                    type="radio"
                    name="radio"
                    id="my_radio_button_id1"
                  />
                  <label for="my_radio_button_id1">Daily</label>
                </div>
                <div className={styles.checkboxgroup}>
                  <input
                    className={styles.inputprofile}
                    type="radio"
                    name="radio"
                    id="my_radio_button_id2"
                  />
                  <label for="my_radio_button_id2">Weekly</label>
                </div>
                <div className={styles.checkboxgroup}>
                  <input
                    className={styles.inputprofile}
                    type="radio"
                    name="radio"
                    id="my_radio_button_id3"
                  />
                  <label for="my_radio_button_id3">Monthly</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.MainContainer}>
            <div className={styles.LeftContainer}>
              <div className={styles.MonthlyContainer}>
                <div className={styles.MonthlyTitle}>
                  <h1>Monthly Report</h1>
                  <img src={more} alt="" />
                </div>
                <div className={styles.ProfitText}>
                  <p>IDR 5M</p>
                  <p>IDR 3M</p>
                  <p>IDR 0K</p>
                  <p>IDR -2M</p>
                </div>
                <div className={styles.Statistik}>
                  <div className={styles.ProfitBar}>
                    <img className={styles.jan} src={jan} alt="" />
                    <img className={styles.feb} src={feb} alt="" />
                    <img className={styles.mar} src={mar} alt="" />
                    <img className={styles.apr} src={apr} alt="" />
                    <img className={styles.may} src={may} alt="" />
                    <img className={styles.jun} src={jun} alt="" />
                  </div>
                  <hr className={styles.hr} />
                  <div className={styles.LossBar}>
                    <img className={styles.jan1} src={jan1} alt="" />
                    <img className={styles.feb1} src={feb1} alt="" />
                    <img className={styles.mar1} src={mar1} alt="" />
                    <img className={styles.apr1} src={apr1} alt="" />
                    <img className={styles.may1} src={may1} alt="" />
                    <img className={styles.jun1} src={jun1} alt="" />
                  </div>
                  <div className={styles.Month}>
                    <p>Jan</p>
                    <p>Feb</p>
                    <p>Mar</p>
                    <p>Apr</p>
                    <p>May</p>
                    <p>Jun</p>
                  </div>
                  <hr className={styles.hr1} />
                  <div className={styles.IncomeBTN}>
                    <input type="radio" name="month" id="" />
                    <label htmlFor="">Income</label>
                    <input type="radio" name="month" id="" />
                    <label htmlFor="">Outcome</label>
                  </div>
                </div>
              </div>
              <div className={styles.ReportBTN}>
                <button className={styles.BTN}>Download Report</button>
              </div>
            </div>

            <div className={styles.RightContainer}>
              <div className={styles.StaffContainer}>
                <div className={styles.Profile}>
                  <img className={styles.profilePic} src="" alt="" />
                  <div className={styles.ProfileName}>
                    <h5>Admin</h5>
                    <p className={styles.Quote}>
                      Keep up the good work and spread love!
                    </p>
                  </div>
                </div>
                <hr className={styles.hr2} />
                <div className={styles.Staff}>
                  <p className={styles.StaffTxt}>Best Staff of the Month</p>
                  <div className={styles.CircleBar}>
                    <img src={progress} alt="" />
                  </div>
                  <p className={styles.AchieveTxt}>
                    Achieved 3.5M of total 5M 478 Customer
                  </p>
                </div>
              </div>
              <div className={styles.GoalContainer}>
                <div className={styles.TitleGoal}>
                  <h3>Goals</h3>
                  <p>Your goals is still on 76%. Keep up the good work!</p>
                </div>
                <img className={styles.GoalIcon} src={goalicon} alt="" />
                <div className={styles.SlideGoal}>
                  <input type="radio" name="goal" id="" />
                  <input type="radio" name="goal" id="" />
                  <input type="radio" name="goal" id="" />
                </div>
              </div>
              <div className={styles.ShareBTN}>
                <button className={styles.BTN1}>Share Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
