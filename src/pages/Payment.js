import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import styles from "../styles/Payment.module.css";
import Card from "../components/CardPayment";

import Hazelnut from "../assets/img/image 36.png";
import ChickenWing from "../assets/img/image 37.png";
import card from "../assets/img/card.png";
import bank from "../assets/img/bank.png";
import delivery from "../assets/img/delivery.png";
import withNavigate from "../helpers/withNavigate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import transactionAction from "../redux/actions/transaction";
import { toast } from "react-toastify";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transaction = useSelector(
    (state) => state.transaction.product_item[2].product_item_view
  );
  const subtotal = useSelector((state) => state.transaction.product_item[2]);
  const profile = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.userData.token);
  // const [method, setMethod] = useState(1);
  const [body, setBody] = useState({
    product_item: subtotal.product_item,
    delivery_methods_id: subtotal.delivery_methods_id,
    set_time: "00:00:00",
    address_detail: profile.delivery_address,
    phone_number: profile.phone_number,
    payment_method: null,
    subtotal: 48500,
    tax_and_fee: 3500,
    shipping_cost: 10000,
    status_order: "pending",
  });
  console.log(body);

  const rupiah = (number) => {
    if (number) {
      return `IDR ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const payment = () => {
    let temp = 0;
    subtotal.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const value = rupiah(temp);
    return value;
  };

  const tax = () => {
    let temp = 0;
    subtotal.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const taxValue = temp * 0.1;
    // setBody({ ...body, tax_and_fee: taxValue });
    const value = rupiah(taxValue);
    return value;
  };

  const totalPayment = () => {
    let temp = 0;
    subtotal.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const taxValue = temp * 0.1;
    const total = temp + taxValue + 10000;
    // setBody({ ...body, subtotal: total });
    const value = rupiah(total);
    return value;
  };

  const handlePaymentMethod = (e) => {
    let temp = 0;
    console.log(e.target.value);
    if (e.target.value === "card") {
      temp = 1;
    } else if (e.target.value === "cod") {
      temp = 2;
    } else {
      temp = 3;
    }
    setBody({ ...body, payment_method: temp });
  };

  const handlePayment = () => {
    let temp = 0;
    subtotal.product_item_view.map((item, idx) => {
      temp += item.price;
    });
    const taxValue = temp * 0.1;
    const total = temp + taxValue + 10000;
    setBody({
      ...body,
      product_item: subtotal.product_item,
      delivery_methods_id: subtotal.delivery_methods_id,
      set_time: "00:00:00",
      subtotal: total,
      tax_and_fee: taxValue,
      shipping_cost: 10000,
    });
    dispatch(transactionAction.createTransactionThunk(body, token));
    return toast.success(
      "Transaction created succesfully, Please complete your payment immediately!"
    );
  };

  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles["title-bar"]}>
                <h1>Checkout your item now!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={styles["left-content"]}>
                <div className={styles.title}>
                  <h1>Order Summary</h1>
                </div>
                <div className={styles.order}>
                  {transaction?.map((e) => {
                    return (
                      <Card
                        title={e.product_name}
                        price={e.price}
                        image={e.image}
                        qty={e.quantity}
                        id={e.id}
                        key={e.id}
                      />
                    );
                  })}
                </div>
                <div className={styles.payment}>
                  <div className={styles["payment-detail"]}>
                    <p>SUBTOTAL</p>
                    <p>TAX & FEES</p>
                    <p>SHIPPING</p>
                  </div>
                  <div className={styles["payment-price"]}>
                    <p>{payment()}</p>
                    <p>{tax()}</p>
                    <p>IDR 10.000</p>
                  </div>
                </div>
                <div className={styles.total}>
                  <h5>TOTAL</h5>
                  <h5>{totalPayment()}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className={styles["right-content"]}>
                <div className={styles.title}>
                  <h1>Address details</h1>
                  <p>edit</p>
                </div>
                <div className={styles["address-detail"]}>
                  <p>
                    <span>Delivery</span> to {profile.delivery_address}
                  </p>
                  <div className={styles.border}>
                    <p>
                      Km 5 refinery road oppsite re public road, effurun,
                      Jakarta
                    </p>
                  </div>

                  <p>{profile.phone_number}</p>
                </div>
                <div className={styles.title}>
                  <h1>Payment method</h1>
                </div>
                <div className={styles["payment-bar"]}>
                  <div className={styles.method}>
                    <input
                      onChange={handlePaymentMethod}
                      className={styles.radioBtn}
                      type="radio"
                      value="cash"
                      name="payment-method"
                    ></input>
                    <div className={styles.icon1}>
                      <img src={card} alt="card"></img>
                    </div>
                    <p>Card</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.method}>
                    <input
                      onChange={handlePaymentMethod}
                      className={styles.radioBtn}
                      type="radio"
                      value="bankAccount"
                      name="payment-method"
                    ></input>
                    <div className={styles.icon2}>
                      <img src={bank} alt="bank"></img>
                    </div>
                    <p>Bank account</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.method}>
                    <input
                      onChange={handlePaymentMethod}
                      className={styles.radioBtn}
                      type="radio"
                      value="cod"
                      name="payment-method"
                    ></input>
                    <div className={styles.icon3}>
                      <img src={delivery} alt="delivery"></img>
                    </div>
                    <p>Cash on delivery</p>
                  </div>
                </div>
                <Button text="Confirm and Pay" onClick={handlePayment} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// class Payment extends Component {
//   state = {
//     address: "",
//     isLoading: true,
//     message: "Nothing Transaction Pending Here",
//     LoadingPayment: false,
//     product: [],
//     userdata: [],
//     user: [],
//     userinfo: JSON.parse(localStorage.getItem("userInfo")),
//     payment: null,
//   };

//   getRequset = () => {
//     this.state.product.map((product) => {
//       const Payment = this.state.payment;
//       const status_id = "2";
//       const url = `http://localhost:8060/api/v1/transactions/payment/${product.transaction_id}`;
//       axios
//         .patch(
//           url,
//           { status_id: status_id, payment_id: Payment },
//           { headers: { "access-token": this.state.userinfo.token } }
//         )
//         .then((results) => {})
//         .then((result) => {
//           this.setState({
//             isLoading: false,
//             product: [],
//           });
//         });
//     });
//   };

//   componentDidMount() {
//     if (this.state.userinfo.token) {
//       this.getDatas();
//     }
//   }

//   getDatas = (userinfo) => {
//     const url = `http://localhost:8060/api/v1/transactions/history/pending`;
//     axios
//       .get(url, {
//         headers: {
//           "access-token": this.state.userinfo.token,
//         },
//       })
//       .then((res) => {
//         this.setState({
//           product: res.data.data,
//         });
//         axios
//           .get(
//             `http://localhost:8060/api/v1/users/${this.state.userinfo.token}`,
//             {
//               headers: {
//                 "access-token": this.state.userinfo.token,
//               },
//             }
//           )
//           .then((results) => {
//             this.setState({
//               userdata: results.data.data.profileUser[0],
//               user: results.data.data.profileData[0],
//               isLoading: false,
//             });
//           });
//       });
//   };

//   setGender(event) {
//     this.setState({
//       payment: event.target.value,
//     });
//   }

//   getSize = () => {
//     if (this.state.product.size === "R") return "Reguler";
//     if (this.state.product.size === "L") return "Large";
//     if (this.state.product.size === "XL") return "XL";
//   };

//   getTotalPrice = (price, qty, discount, cost) => {
//     const finalDiscount = (parseInt(discount) / 100) * parseInt(price);
//     const finalPrice = (price - finalDiscount + cost) * qty;
//     return this.costing(finalPrice);
//   };

//   costing = (price) => {
//     return (
//       "IDR " +
//       parseFloat(price)
//         .toFixed()
//         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
//     );
//   };
//   render() {
//     let subTotal = 0;
//     let tax = 0;
//     let shipping = 0;
//     return (
//       <>
//         <Header />
//         <main className={styles.content}>
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className={styles["title-bar"]}>
//                   <h1>Checkout your item now!</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-5">
//                 <div className={styles["left-content"]}>
//                   <div className={styles.title}>
//                     <h1>Order Summary</h1>
//                   </div>
//                   <div className={styles.order}>
//                     <div className={styles["order-detail"]}>
//                       {!this.state.isLoading && this.state.product < 1 && (
//                         <div className={styles["notfound"]}>
//                           <p className={styles.ntfound}>{this.state.message}</p>
//                         </div>
//                       )}
//                       {this.state.isLoading ? (
//                         <div className={styles["loader-container"]}>
//                           <div className={styles.spinner}></div>
//                         </div>
//                       ) : (
//                         this.state.product.map((product) => {
//                           subTotal += product.subtotal;
//                           tax += parseInt(product.tax);
//                           shipping += parseInt(product.shipping);
//                           return (
//                             <Card
//                               title={product.product_name}
//                               price={this.costing(product.subtotal)}
//                               image={product.image}
//                               size={this.getSize()}
//                               qty={product.qty}
//                             />
//                           );
//                         })
//                       )}
//                     </div>
//                     {/* <div className={styles["order-detail"]}>
//                       <div className={styles["product-detail"]}>
//                         <img src={ChickenWing} alt="Chicken Wing"></img>
//                         <ol>
//                           <li>Chicken Fire Wings</li>
//                           <li>x 2</li>
//                         </ol>
//                       </div>
//                       <p>IDR 30.0</p>
//                     </div> */}
//                   </div>
//                   <div className={styles.payment}>
//                     <div className={styles["payment-detail"]}>
//                       <p>SUBTOTAL</p>
//                       <p>TAX & FEES</p>
//                       <p>SHIPPING</p>
//                     </div>
//                     <div className={styles["payment-price"]}>
//                       <p>{this.costing(subTotal)}</p>
//                       <p>{this.costing(tax)}</p>
//                       <p>{this.costing(shipping)}</p>
//                     </div>
//                   </div>
//                   <div className={styles.total}>
//                     <h5>TOTAL</h5>
//                     <h5>{this.costing(subTotal + tax + shipping)}</h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-5 offset-lg-1">
//                 <div className={styles["right-content"]}>
//                   <div className={styles.title}>
//                     <h1>Address details</h1>
//                     <p>edit</p>
//                   </div>
//                   <div className={styles["address-detail"]}>
//                     <p>
//                       <span>Delivery</span> to
//                     </p>
//                     <div className={styles.border}>
//                       <p>{this.state.userdata.adress}</p>
//                     </div>

//                     <p>{this.state.user.phone}</p>
//                   </div>
//                   <div className={styles.title}>
//                     <h1>Payment method</h1>
//                   </div>
//                   <div className={styles["payment-bar"]}>
//                     <div className={styles.method}>
//                       <input type="radio" value="1" name="via"></input>
//                       <div className={styles.icon1}>
//                         <img src={card} alt="card"></img>
//                       </div>
//                       <p>Card</p>
//                     </div>
//                     <div className={styles.line}></div>
//                     <div className={styles.method}>
//                       <input type="radio" value="2" name="via"></input>
//                       <div className={styles.icon2}>
//                         <img src={bank} alt="bank"></img>
//                       </div>
//                       <p>Bank account</p>
//                     </div>
//                     <div className={styles.line}></div>
//                     <div className={styles.method}>
//                       <input type="radio" value="3" name="via"></input>
//                       <div className={styles.icon3}>
//                         <img src={delivery} alt="delivery"></img>
//                       </div>
//                       <p>Cash on delivery</p>
//                     </div>
//                   </div>
//                   <div
//                     className={
//                       this.state.product.length > 0
//                         ? styles.btn
//                         : styles["btn-non-select"]
//                     }
//                     onClick={() => {
//                       if (this.state.product.length > 0) {
//                         this.setState({
//                           isLoading: true,
//                           message: "Payment Success!",
//                         });
//                         this.getRequset();
//                       }
//                     }}
//                   ></div>
//                   <Button text="Confirm and Pay" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </>
//     );
//   }
// }

export default withNavigate(Payment);
