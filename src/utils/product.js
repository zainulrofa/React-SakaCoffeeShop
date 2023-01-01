import axios from "axios";

const BaseUrl = process.env.REACT_APP_BACKEND_HOST;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const getAllProduct = (query) => {
  const URL = `${BaseUrl}products/get_products?limit=12`;
  console.log("util", URL);
  return axios.get(URL, { params: query });
};

export const getProductDetail = (id, token) => {
  const URL = `${BaseUrl}products/product_detail/${id}`;
  return axios.get(URL, config(token));
};
