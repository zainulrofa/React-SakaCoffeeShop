import React, { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import sakaLogo from "../assets/img/sakacoffee.png";
import searching from "../assets/img/Searching.png";
import status from "../assets/img/status.PNG";
import teamwork from "../assets/img/teamwork.png";
import check from "../assets/img/check.png";
import checkList from "../assets/img/checklist.png";
import Hazelnut from "../assets/img/image4.png";
import Pinky from "../assets/img/image 27.png";
import chickenWing from "../assets/img/image 30.png";
import map from "../assets/img/Huge Global.png";
import netflix from "../assets/img/netflix.png";
import reddit from "../assets/img/reddit.png";
import amazon from "../assets/img/amazon.png";
import discord from "../assets/img/discord.png";
import spotify from "../assets/img/spotify.png";
import star from "../assets/img/star.png";
import customer1 from "../assets/img/profile-customer-1.png";
import customer2 from "../assets/img/profile-customer-2.png";
import customer3 from "../assets/img/profile-customer-3.png";
import bullet from "../assets/img/bullet-page.png";
import arrow from "../assets/img/arrow.png";
import Facebook from "../assets/img/Facebook.png";
import Twitter from "../assets/img/Twitter.png";
import Instagram from "../assets/img/Vector.png";
import withNavigate from "../helpers/withNavigate";
import { useState } from "react";

function Home({ navigate }) {
  const [search, setSearch] = useState(() => "");

  const setValue = (event) => {
    console.log(event);
    setSearch(event.target.value);
  };
  const getSearch = () => {
    return navigate(`/product?search=${search}`);
  };

  return (
    <Fragment>
      <Header />
      <main>
        <div className={styles["container-fluid"]}>
          <div className="container text-center">
            <div className={`${styles.search} row`}>
              <div className="col-lg-6"></div>
              <div className=" d-flex col-md-12 justify-content-end">
                <form className={styles["search-bar"]} onSubmit={getSearch}>
                  <img src={searching} alt="#" />
                  <input type="text" placeholder="Search" onChange={setValue} />
                </form>
              </div>
            </div>
          </div>
          <div className="container text-left">
            <div className={`${styles["menu-content"]} row`}>
              <div className="col-lg-6">
                <h1>Start Your Day with Coffee and Good Meals</h1>
                <p>
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
                <button type="submit">Get Started</button>
              </div>
            </div>
            <div className={styles["status-img"]}>
              <div className={styles.background}></div>
              <img src={status} alt="status" />
            </div>
          </div>
        </div>
      </main>
      <section className={styles["quality-content"]}>
        <div className="container-fluid">
          <div className="container text-start">
            <div className={`${styles.quality} row justify-content-center`}>
              <div className="col-lg-6 col-sd-12">
                <img src={teamwork} alt="teamwork" />
              </div>
              <div
                className={`${styles["quality-detail"]} col-lg-5 offset-lg-1 col-sd-12 mt-md-3`}
              >
                <h2>We Provide Good Coffee and Healthy Meals</h2>
                <h4>
                  You can explore the menu that we provide with fun and have
                  their own taste and make your day better.
                </h4>
                <div className={styles["quality-detail-list"]}>
                  <div className={styles["check-img"]}>
                    <img src={check} alt="check" />
                  </div>
                  <p>High quality beans.</p>
                </div>
                <div className={styles["quality-detail-list"]}>
                  <div className={styles["check-img"]}>
                    <img src={check} alt="check" />
                  </div>
                  <p>Healthy meals, you can request the ingredients.</p>
                </div>
                <div className={styles["quality-detail-list"]}>
                  <div className={styles["check-img"]}>
                    <img src={check} alt="check" />
                  </div>
                  <p>
                    Chat with our staff to get better experience for ordering.
                  </p>
                </div>
                <div className={styles["quality-detail-list"]}>
                  <div className={styles["check-img"]}>
                    <img src={check} alt="check" />
                  </div>
                  <p>
                    Free member card with a minimum purchase of IDR 200.000.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["favorite-product"]}>
        <div className="container-fluid">
          <div className="container text-center">
            <div className={`${styles.title} row`}>
              <div className="col">
                <h2>Here is People's Favorite</h2>
                <p>
                  Let's choose and have a bit taste of poeple's favorite. It
                  might be yours too!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mt-4">
                <div className={styles.card}>
                  <img
                    className={styles["product-img"]}
                    src={Hazelnut}
                    alt="HazelnutLatte"
                  />
                  <h4>Hazelnut Latte</h4>
                  <div className={styles["card-content"]}>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Hazelnut Syrup</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Wanilla Whipped Cream</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Ice / Hot</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Sliced Banana on Top</p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h3>IDR 25.000</h3>
                    <button type="submit">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className={styles.card}>
                  <img
                    className={styles["product-img"]}
                    src={Pinky}
                    alt="Pinky Promise"
                  />
                  <h4>Pinky Promise</h4>
                  <div className={styles["card-content"]}>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>1 Shot of Coffee</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Vanilla Whipped Cream</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Chocolate Biscuits</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Strawberry Syrup</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Sliced strawberry on Top</p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h3>IDR 30.000</h3>
                    <button type="submit">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className={styles.card}>
                  <img
                    className={styles["product-img"]}
                    src={chickenWing}
                    alt="Chicken Wings"
                  />
                  <h4>Chicken Wings</h4>
                  <div className={styles["card-content"]}>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Wings</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Drum Sticks</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Mayonaise and Lemon</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Hot Fried</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Secret Recipe</p>
                    </div>
                    <div className={styles["card-list"]}>
                      <div className={styles.checklist}>
                        <img src={checkList} alt="check" />
                      </div>
                      <p>Buy 1 Get 1 only for Dine in</p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h3>IDR 40.000</h3>
                    <button type="submit">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["store-map"]}>
        <div className="container-fluid">
          <div className={`${styles["store-map-img"]} container`}>
            <div className="row text-center">
              <div className="col-12">
                <h2>Visit Our Store in the Spot on the Map Below</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <p>
                  See our store in every city on the spot and spen your good day
                  there. See you soon!
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sponsor}>
        <div className="container-fluid">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h2>Our Partner</h2>
              </div>
            </div>
            <div className="container-fluid">
              <div className={`container ${styles["sponsor-img"]}`}>
                <div className="row">
                  <div className="col-12">
                    <div className="img-partners-container row justify-content-around">
                      <img
                        src={netflix}
                        alt=""
                        className="col-md-2 col-6 netflix"
                      />
                      <img
                        src={reddit}
                        alt=""
                        className="col-md-2 col-6 reddit"
                      />
                      <img
                        src={amazon}
                        alt=""
                        className="col-md-2 col-6 amazon"
                      />
                      <img
                        src={discord}
                        alt=""
                        className="col-md-2 col-6 discord"
                      />
                      <img
                        src={spotify}
                        alt=""
                        className="col-md-2 col-12 spotify"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.customer}>
        <div className="container-fluid">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h2>Loved by Thousands of Happy Customer</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <p>
                  These are the stories of our customers who have visited us
                  with great pleasure.
                </p>
              </div>
            </div>
            <div className="container-fluid">
              <div className="container text-center">
                <div className="row">
                  <div className={`col-lg-4 ${styles["customer-1"]}`}>
                    <div className={styles["detail-customer"]}>
                      <div className={styles.bio}>
                        <div className={styles["bio-left"]}>
                          <div className={styles["profile-img"]}>
                            <img src={customer1} alt="profile" />
                          </div>
                          <div className={styles["name-loc"]}>
                            <h5>Viezh Robert</h5>
                            <h6>Warsaw, Poland</h6>
                          </div>
                        </div>
                        <div className={styles.rating}>
                          <h5>4.5</h5>
                          <div className={styles.star}>
                            <img src={star} alt="star" />
                          </div>
                        </div>
                      </div>
                      <div className={styles.comment}>
                        <p>
                          “Wow... I am very happy to spend my whole day here.
                          the Wi-fi is good, and the coffee and meals tho. I
                          like it here!! Very recommended!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 ${styles["customer-2"]}`}>
                    <div className={styles["detail-customer"]}>
                      <div className={styles.bio}>
                        <div className={styles["bio-left"]}>
                          <div className={styles["profile-img"]}>
                            <img src={customer2} alt="profile" />
                          </div>
                          <div className={styles["name-loc"]}>
                            <h5>Yessica Christy</h5>
                            <h6>Shanxi, China</h6>
                          </div>
                        </div>
                        <div className={styles.rating}>
                          <h5>4.5</h5>
                          <div className={styles.star}>
                            <img src={star} alt="star" />
                          </div>
                        </div>
                      </div>
                      <div className={styles.comment}>
                        <p>
                          “I like it because I like to travel far and still can
                          make my day better just by drinking their Hazelnut
                          Latte
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 ${styles["customer-3"]}`}>
                    <div className={styles["detail-customer"]}>
                      <div className={styles.bio}>
                        <div className={styles["bio-left"]}>
                          <div className={styles["profile-img"]}>
                            <img src={customer3} alt="profile" />
                          </div>
                          <div className={styles["name-loc"]}>
                            <h5>Kim Young Jou</h5>
                            <h6>Seoul, South Korea</h6>
                          </div>
                        </div>
                        <div className={styles.rating}>
                          <h5>4.5</h5>
                          <div className={styles.star}>
                            <img src={star} alt="star" />
                          </div>
                        </div>
                      </div>
                      <div className={styles.comment}>
                        <p>
                          “This is very unusual for my taste, I haven't liked
                          coffee before but their coffee is the best! and yup,
                          you have to order the chicken wings, the best in town!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-6">
                    <div className={styles["img-page"]}>
                      <img src={bullet} alt="page" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={styles.arrows}>
                      <div className={styles.left}>
                        <div className={styles.circle}></div>
                        <div className={styles.arrow}>
                          <img src={arrow} alt="arrow" />
                        </div>
                      </div>
                      <div className={styles.right}>
                        <div className={styles.circle}></div>
                        <div className={styles.arrow}>
                          <img src={arrow} alt="arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["promo-cta"]} container col-12`}>
        <div className="conatiner-fluid">
          <div className="container">
            <div className={`${styles["cta-content"]} row align-items-center`}>
              <div className={`${styles["cta-detail"]} col-8`}>
                <h1 className={styles["cta-title"]}>Check our promo today!</h1>
                <p className={styles["cta-subtitle"]}>
                  Let's see the deals and pick yours!
                </p>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <button className={styles["btn-see-promo"]}>See promo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-fluid">
          <div className="container">
            <div
              className={`${styles["footer-content"]} row justify-content-between`}
            >
              <div className="col-lg-6">
                <div
                  className={styles.logo}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <div className={styles["logo-img"]}>
                    <img src={sakaLogo} alt="logo" />
                  </div>
                  <p className={styles["logo-title"]} href="#">
                    Saka Coffee Shop
                  </p>
                </div>
                <div className={styles["about-detail"]}>
                  <p>
                    Coffee Shop is a store that sells some good meals, and
                    especially coffee. We provide high quality beans.
                  </p>
                </div>
                <div className={styles["sosmed-detail"]}>
                  <div className={styles.box}>
                    <div className={styles["back-logo"]}></div>
                    <img className={styles["img-logo"]} src={Facebook} alt="" />
                  </div>
                  <div className={styles.box}>
                    <div className={styles["back-logo"]}></div>
                    <img className={styles["img-logo"]} src={Twitter} alt="" />
                  </div>
                  <div className={styles.box}>
                    <div className={styles["back-logo"]}></div>
                    <img
                      className={styles["img-logo"]}
                      src={Instagram}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.copyright}>
                  <p className={styles.copyright}>©2020SakaCoffeeStore</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.content}>
                  <div className={styles["content-detail"]}>
                    <h2>Product</h2>
                    <ol>
                      <li>Download</li>
                      <li>Pricing</li>
                      <li>Locations</li>
                      <li>Contries</li>
                      <li>Blog</li>
                    </ol>
                  </div>
                  <div className={styles["content-detail"]}>
                    <h2>Engage</h2>
                    <ol>
                      <li>Coffee Shop ?</li>
                      <li>FAQ</li>
                      <li>About Us</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default withNavigate(Home);
