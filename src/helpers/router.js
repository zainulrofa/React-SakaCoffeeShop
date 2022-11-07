import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPwd";
import Profile from "../pages/Profile";
import History from "../pages/History";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import EditProduct from "../pages/EditProduct";
import AddPromo from "../pages/AddPromo";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetails />,
  },
  {
    path: "/edit-product",
    element: <EditProduct />,
  },
  {
    path: "/add-promo",
    element: <AddPromo />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
]);

export default router;
