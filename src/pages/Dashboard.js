import React from "react";
import css from "../style/Dashboard.module.css";
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
      <div className={css.bordercontainer}>
        <div className={css.centerin}>
          <div className={css.topContent}>
            <h1>See how your store progress so far</h1>
            <div className={css.radioOption}>
              <div id={css.checkboxes}>
                <div className={css.checkboxgroup}>
                  <input
                    className={css.inputprofile}
                    type="radio"
                    name="radio"
                    id="my_radio_button_id1"
                  />
                  <label for="my_radio_button_id1">Daily</label>
                </div>
                <div className={css.checkboxgroup}>
                  <input
                    className={css.inputprofile}
                    type="radio"
                    name="radio"
                    id="my_radio_button_id2"
                  />
                  <label for="my_radio_button_id2">Weekly</label>
                </div>
                <div className={css.checkboxgroup}>
                  <input
                    className={css.inputprofile}
                    type="radio"
                    name="radio"
                    id="my_radio_button_id3"
                  />
                  <label for="my_radio_button_id3">Monthly</label>
                </div>
              </div>
            </div>
          </div>
          <div className={css.MainContainer}>
            <div className={css.LeftContainer}>
              <div className={css.MonthlyContainer}>
                <div className={css.MonthlyTitle}>
                  <h1>Monthly Report</h1>
                  <img src={more} alt="" />
                </div>
                <div className={css.ProfitText}>
                  <p>IDR 5M</p>
                  <p>IDR 3M</p>
                  <p>IDR 0K</p>
                  <p>IDR -2M</p>
                </div>
                <div className={css.Statistik}>
                  <div className={css.ProfitBar}>
                    <img className={css.jan} src={jan} alt="" />
                    <img className={css.feb} src={feb} alt="" />
                    <img className={css.mar} src={mar} alt="" />
                    <img className={css.apr} src={apr} alt="" />
                    <img className={css.may} src={may} alt="" />
                    <img className={css.jun} src={jun} alt="" />
                  </div>
                  <hr className={css.hr} />
                  <div className={css.LossBar}>
                    <img className={css.jan1} src={jan1} alt="" />
                    <img className={css.feb1} src={feb1} alt="" />
                    <img className={css.mar1} src={mar1} alt="" />
                    <img className={css.apr1} src={apr1} alt="" />
                    <img className={css.may1} src={may1} alt="" />
                    <img className={css.jun1} src={jun1} alt="" />
                  </div>
                  <div className={css.Month}>
                    <p>Jan</p>
                    <p>Feb</p>
                    <p>Mar</p>
                    <p>Apr</p>
                    <p>May</p>
                    <p>Jun</p>
                  </div>
                  <hr className={css.hr1} />
                  <div className={css.IncomeBTN}>
                    <input type="radio" name="month" id="" />
                    <label htmlFor="">Income</label>
                    <input type="radio" name="month" id="" />
                    <label htmlFor="">Outcome</label>
                  </div>
                </div>
              </div>
              <div className={css.ReportBTN}>
                <button className={css.BTN}>Download Report</button>
              </div>
            </div>

            <div className={css.RightContainer}>
              <div className={css.StaffContainer}>
                <div className={css.Profile}>
                  <img className={css.profilePic} src={parker} alt="" />
                  <div className={css.ProfileName}>
                    <h5>Putra Parker</h5>
                    <p className={css.Quote}>
                      Keep up the good work and spread love!
                    </p>
                  </div>
                </div>
                <hr className={css.hr2} />
                <div className={css.Staff}>
                  <p className={css.StaffTxt}>Best Staff of the Month</p>
                  <div className={css.CircleBar}>
                    <img src={progress} alt="" />
                  </div>
                  <p className={css.AchieveTxt}>
                    Achieved 3.5M of total 5M 478 Customer
                  </p>
                </div>
              </div>
              <div className={css.GoalContainer}>
                <div className={css.TitleGoal}>
                  <h3>Goals</h3>
                  <p>Your goals is still on 76%. Keep up the good work!</p>
                </div>
                <img className={css.GoalIcon} src={goalicon} alt="" />
                <div className={css.SlideGoal}>
                  <input type="radio" name="goal" id="" />
                  <input type="radio" name="goal" id="" />
                  <input type="radio" name="goal" id="" />
                </div>
              </div>
              <div className={css.ShareBTN}>
                <button className={css.BTN1}>Share Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
