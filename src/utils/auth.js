import axios from "axios";

const BaseUrl = process.env.REACT_APP_BACKEND_HOST;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const register = (body) => {
  const URL = `${BaseUrl}users/register`;
  // console.log('util', URL);
  return axios.post(URL, body);
};

export const login = (body) => {
  const URL = `${BaseUrl}auth/login`;
  console.log("util", URL);
  return axios.post(URL, body);
};

export const forgot = (body) => {
  const URL = `${BaseUrl}users/forgotpassword`;
  // console.log('util', body);
  return axios.post(URL, body);
};

export const reset = (body) => {
  const URL = `${BaseUrl}users/resetpassword`;
  // console.log('util', body);
  return axios.patch(URL, body);
};

export const editPwd = (body, token) => {
  const URL = `${BaseUrl}users/account`;
  // console.log('util', body);
  return axios.patch(URL, body, config(token));
};

export const logout = (token) => {
  const URL = `${BaseUrl}auth/logout`;
  // console.log('util', body);
  return axios.delete(URL, config(token));
};
