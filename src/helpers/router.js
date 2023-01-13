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
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import ResetPassword from "../pages/ResetPwd";

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
    path: "/reset-password",
    element: <ResetPassword />,
  },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoute>
  //       <Profile />
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/history",
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  // {
  //   path: "/payment",
  //   element: (
  //     <PrivateRoute>
  //       <Payment />
  //     </PrivateRoute>
  //   ),
  // },
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
    path: "/product/edit-product/:id",
    element: <EditProduct />,
  },
  {
    path: "/product/add-promo",
    element: <AddPromo />,
  },
  {
    path: "/product/add-product",
    element: <AddProduct />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);

export default router;
